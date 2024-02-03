import { MainContainer, CardsContainer, ButtonNext, CardContainer } from "./ComicsPageStyles";
import CardCharacter from "../../components/Card/Card";
import ImageBg from "../../components/ImageBg";
import RightArrow from '../../assets/right-arrow.svg';
import LeftArrow from '../../assets/left-arrow.svg';
import comicsData from "../../data/comicsData";

import { useState } from "react";


function ComicsPage() {
  const [start, setStart] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(0);

  const handleSelectCard = (id: number) => {
    setSelectedCardId(id);
  }

  const handleNext = () => {
    setIsTransitioning(true);
    setStart(prevStart => (prevStart + 1) % comicsData.length);
    setIsTransitioning(false);
  }

  const handlePrevious = () => {
    setIsTransitioning(true);
    setStart(prevStart => (prevStart - 1) % comicsData.length);
    setIsTransitioning(false);
  }


  return (
    <MainContainer>
      <ImageBg animate={false} />

      <ButtonNext onClick={handlePrevious} position='left' show={start > 0}>
        <img src={LeftArrow} alt="Left Arrow" />
      </ButtonNext>

      <CardsContainer>
        {[0, 1, 2].map((i, index) => {
          const comics = comicsData[(start + i) % comicsData.length];
          return (
            <CardContainer >
              <CardCharacter
                isExiting={isTransitioning} 
                isEntering={!isTransitioning} 
                key={comics.id}
                item={comics}
                index={index}
                selectedCardId={selectedCardId}
                setSelectedCard={handleSelectCard}
              />
            </CardContainer>
          );
        })}
      </CardsContainer>

      <ButtonNext onClick={handleNext} position="right" show={true}>
        <img src={RightArrow} alt="Right Arrow" />
      </ButtonNext>
      
    </MainContainer>
  )
}

export default ComicsPage