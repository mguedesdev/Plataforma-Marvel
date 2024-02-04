import MainPage from "../../components/MainPage/MainPage";
import ImageBg from "../../components/ImageBg";
import RightArrow from '../../assets/right-arrow.svg';
import LeftArrow from '../../assets/left-arrow.svg';
import ButtonsCard from "../../components/ButtonsCard/ButtonsCard";
import { MainContainer} from "../../styles/ContainerPageStyles";
import CustomSelect from "../../components/CustomSelectFilter/CustomSelect";

import moviesData from "../../data/moviesData";
import { useState } from "react";

import { CardItem } from "../../types/cardItem";

function MoviesPage() {
  const [start, setStart] = useState(0);
  const [filter, setFilter] = useState('releaseDate');

  const filterOptions = [
    { label: 'Lançamento', value: 'releaseDate' },
    { label: 'Cronologia', value: 'chronologicalOrder' },
  ];

  const handleNext = () => {
    setStart(prevStart => (prevStart + 1) % moviesData.length);
  }

  const handlePrevious = () => {
    setStart(prevStart => (prevStart - 1) % moviesData.length);
  }

  const compareDates = (dateA: string, dateB: string) => {
    return new Date(dateA).getTime() - new Date(dateB).getTime();
  };

  const sortMovies = (movies: CardItem[]) => {
    return movies.slice().sort((a: CardItem, b: CardItem) => {
      if (filter === 'releaseDate') {
        return compareDates(a.releaseDate!, b.releaseDate!);
      } 
      return (a.chronologicalOrder ?? 0) - (b.chronologicalOrder ?? 0);
    });
  };

  const displayedMovies = sortMovies(moviesData);

  return (
    <MainContainer>
      <ImageBg animate={false} />
      
      <div>
        <CustomSelect
          options={filterOptions}
          value={filterOptions.find((option) => option.value === filter)?.label || ''}
          onChange={(newValue) => setFilter(newValue)}
        />

        <MainPage data={displayedMovies} start={start} />
      </div>

      <ButtonsCard
        nextPreviousCard={handleNext}
        start={true} Arrow={RightArrow}
        position='right'
      />
      <ButtonsCard
        nextPreviousCard={handlePrevious}
        start={start > 0}
        Arrow={LeftArrow}
        position='left'
      />

    </MainContainer>
  )
}

export default MoviesPage