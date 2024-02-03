import { MainContainer, CardsContainer, ButtonNext, FilterContainer, CardContainer} from "./MoviesPageStyles";
import CustomSelect from "../../components/CustomSelectFilter/CustomSelect";
import ImageBg from "../../components/ImageBg";
import RightArrow from '../../assets/right-arrow.svg';
import LeftArrow from '../../assets/left-arrow.svg';
import { useState } from "react";
import moviesData from "../../data/moviesData";
import CardCharacter from "../../components/Card/Card";
import { CardItem } from "../../types/cardItem";

function MoviesPage() {
  const [start, setStart] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(0);
  const [filter, setFilter] = useState('releaseDate');

  const filterOptions = [
    { label: 'Lançamento', value: 'releaseDate' },
    { label: 'Cronologia', value: 'chronologicalOrder' },
  ];

  const handleSelectCard = (id: number) => {
    setSelectedCardId(id);
  }

  const handleNext = () => {
    setIsTransitioning(true);
    setStart(prevStart => (prevStart + 1) % moviesData.length);
    setIsTransitioning(false);
  }

  const handlePrevious = () => {
    setIsTransitioning(true);
    setStart(prevStart => (prevStart - 1) % moviesData.length);
    setIsTransitioning(false);
  }

  const compareDates = (dateA: string, dateB: string) => {
    return new Date(dateA).getTime() - new Date(dateB).getTime();
  };

  const sortMovies = (movies: CardItem[]) => {
    return movies.slice().sort((a: CardItem, b: CardItem) => {
      if (filter === 'releaseDate') {
        return compareDates(a.releaseDate!, b.releaseDate!);
      } else {
        return (a.chronologicalOrder ?? 0) - (b.chronologicalOrder ?? 0);
      }
    });
  };

  return (
    <MainContainer>
      <ImageBg animate={false} />
      
      <div>
      <FilterContainer>
        <CustomSelect
          options={filterOptions}
          value={filterOptions.find((option) => option.value === filter)?.label || ''}
          onChange={(newValue) => setFilter(newValue)}
        />
      </FilterContainer>

      <CardsContainer>
      {sortMovies(moviesData)
        .concat(sortMovies(moviesData)) 
        .slice(start, start + 3)
        .map((movie, index) => {
          return (
            <CardContainer>
              <CardCharacter
                isExiting={isTransitioning} 
                isEntering={!isTransitioning} 
                key={movie.id}
                item={movie}
                index={index}
                selectedCardId={selectedCardId}
                setSelectedCard={handleSelectCard}
              />
            </CardContainer>
          );
        })}
      </CardsContainer>
      </div>

      <ButtonNext onClick={handlePrevious} position='left' show={start > 0}>
        <img src={LeftArrow} alt="Left Arrow" />
      </ButtonNext>
      
      <ButtonNext onClick={handleNext} position="right" show={true}>
        <img src={RightArrow} alt="Right Arrow" />
      </ButtonNext>


    </MainContainer>
  )
}

export default MoviesPage