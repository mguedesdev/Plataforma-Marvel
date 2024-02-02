import { MainContainer, CardsContainer, ButtonNext } from "./MoviesPageStyles";
import ImageBg from "../../components/ImageBg";
import RightArrow from '../../assets/right-arrow.svg';
import LeftArrow from '../../assets/left-arrow.svg';
import { useState } from "react";
import moviesData from "../../data/moviesData";
import CardCharacter from "../../components/Card/Card";


function MoviesPage() {
  const [start, setStart] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(0);

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

  return (
    <MainContainer>
      <div>
        Filter
      </div>
      <ImageBg animate={false} />
      
      <ButtonNext onClick={handlePrevious} position='left' show={start > 0}>
        <img src={LeftArrow} alt="Left Arrow" />
      </ButtonNext>

      <CardsContainer>
        {[0, 1, 2].map((i, index) => {
          const movie = moviesData[(start + i) % moviesData.length];
          return (
            <div style={{position: 'relative', width: '100%', height: '100%'}}>
              <CardCharacter
                isExiting={isTransitioning} 
                isEntering={!isTransitioning} 
                key={movie.id}
                item={movie}
                index={index}
                selectedCardId={selectedCardId}
                setSelectedCard={handleSelectCard}
              />
            </div>
          );
        })}
      </CardsContainer>

      
      <ButtonNext onClick={handleNext} position="right" show={true}>
        <img src={RightArrow} alt="Right Arrow" />
      </ButtonNext>


    </MainContainer>
  )
}

export default MoviesPage