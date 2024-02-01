import { MainContainer, CardsContainer, ButtonNext } from "./CharactersPageStyles";
import ImageBg from "../../components/ImageBg";
import CardCharacter from "../../components/CharactersPage/CardCharacter";
import RightArrow from '../../assets/right-arrow.svg';
import LeftArrow from '../../assets/left-arrow.svg';
import charactersData from "../../data/charactersData";

import { useState } from "react";

function Personagens() {
  const [start, setStart] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    setIsTransitioning(true);
    setStart(prevStart => (prevStart + 1) % charactersData.length);
    setIsTransitioning(false);
  }

  const handlePrevious = () => {
    setIsTransitioning(true);
    setStart(prevStart => (prevStart - 1) % charactersData.length);
    setIsTransitioning(false);
  }

  return (
    <MainContainer>
      <ImageBg animate={false} />

      <ButtonNext onClick={handlePrevious} position='left' show={start > 0}>
        <img src={LeftArrow} alt="Left Arrow" />
      </ButtonNext>

      <CardsContainer>
        {[0, 1, 2].map(i => {
          const character = charactersData[(start + i) % charactersData.length];
          return (
            <CardCharacter
              isExiting={isTransitioning} 
              isEntering={!isTransitioning} 
              key={character.id + Math.random()}
              character={character}
              >
            </CardCharacter>
          );
        })}
      </CardsContainer>

      <ButtonNext onClick={handleNext} position="right" show={true}>
        <img src={RightArrow} alt="Right Arrow" />
      </ButtonNext>
      
    </MainContainer>
  )
}

export default Personagens