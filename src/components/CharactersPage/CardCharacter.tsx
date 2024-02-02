import { CardContainer, CardContent, ModalContainer, BtnDetails, CardImage } from "./CardCharacterStyles"
import { useState } from "react";
import CardDetails from "./CardDetails";

interface CardCharacterProps {
  character : {
    id: number;
    title: string;
    description: string;
    image: string;
    appearances: string[];
    fanRating: number;
  }

  isEntering: boolean;
  isExiting: boolean;

  setSelectedCard: (id: number) => void;
  selectedCardId: number;
  index: number;

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
          
        <CardDetails
          character={character}
          detailsOpen={detailsOpen}
          handleDetails={handleDetails}
          index={index}
        />
        
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