import { MainContainer, CardsContainer, ButtonNext } from "./CharactersPageStyles";
import ImageBg from "../../components/ImageBg";
import CardCharacter from "../../components/CharactersPage/CardCharacter";
import RightArrow from '../../assets/right-arrow.svg';
import LeftArrow from '../../assets/left-arrow.svg';
import charactersData from "../../data/charactersData";

import { useState } from "react";

function CharactersPage() {
  const [start, setStart] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(0);

  const handleSelectCard = (id: number) => {
    setSelectedCardId(id);
  }

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
        {[0, 1, 2].map((i, index) => {
          const character = charactersData[(start + i) % charactersData.length];
          return (
            <div style={{position: 'relative', width: '100%', height: '100%'}}>
              <CardCharacter
                isExiting={isTransitioning} 
                isEntering={!isTransitioning} 
                key={character.id}
                character={character}
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

export default CharactersPage