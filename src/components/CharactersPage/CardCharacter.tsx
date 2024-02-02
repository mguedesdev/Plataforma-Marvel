import { CardContainer, CardContent, ModalContainer, BtnDetails, CardDetailsContainer, CardImage, CardDetailsContent } from "./CardCharacterStyles"
import { useState } from "react";
import iconClose from "../../assets/icon-close.png";
import star from '../../assets/star.svg';


interface CardCharacterProps {
  character : {
    id: number;
    title: string;
    description: string;
    image: string;
    appearances: string[];
    fanRating: number;
  }
  index: number;
  isEntering?: boolean;
  isExiting?: boolean;
  setSelectedCard: (id: number) => void;
  selectedCardId: number;
}

function CardCharacter({ character, isEntering, isExiting, setSelectedCard, selectedCardId, index }: CardCharacterProps) {

  const [detailsOpen, setDetailsOpen] = useState(false);

  const handleDetails = () => {
    setDetailsOpen(!detailsOpen);
    setSelectedCard(character.id);
  }

  const isCardSelected = selectedCardId === character.id;

  return (
    <>
      <CardContainer
        isEntering={isEntering || false}
        isExiting={isExiting || false}
        isCardSelected={isCardSelected}
        detailsOpen={detailsOpen}
        index={index}
      >
        
        <CardImage src={character.image} alt={character.title} />
        
          {detailsOpen && <CardDetailsContainer>   
            <CardDetailsContent
            index={index}>
              <h1>{character.title}</h1>
              <div>
                <h2>Aparições</h2>
                {character.appearances.map((appearance, index) => {
                  return <p key={index}>{appearance}</p>
                })}
              </div>
              <div>
                <h3>Avaliações dos Fãs</h3>
                {Array.from({ length: 5 }, (_, i) => (
                  <img key={i} src={star} style={{ filter: i < character.fanRating ? 'grayscale(0%)' : 'grayscale(100%)' }}/>
                ))}
              </div>
              
            </CardDetailsContent>
            <button onClick={handleDetails}>
              <img src={iconClose} alt="" />
            </button>
          </CardDetailsContainer>
          }
          {!detailsOpen && <CardContent>
            <h1>{character.title}</h1>
            <p>{character.description}</p>
            <BtnDetails onClick={handleDetails}>ver detalhes</BtnDetails>
          </CardContent>}
        
      </CardContainer>
      
      {detailsOpen && <ModalContainer detailsOpen={detailsOpen} />}
    </>
  )
}

export default CardCharacter