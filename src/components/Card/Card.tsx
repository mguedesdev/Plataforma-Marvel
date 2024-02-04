import { CardContainer, CardContent, ModalContainer, BtnDetails, CardImage } from "./CardStyles"
import { useState } from "react";
import CardDetails from "../CardDetails/CardDetails";
import { CardItem } from "../../types/cardItem";

interface CardItemProps {
  item: CardItem;
  animate: boolean;
  setSelectedCard: (id: number) => void;
  selectedCardId: number;
  index: number;
}

function Card({ item, animate, setSelectedCard, selectedCardId, index }: CardItemProps) {

  const [detailsOpen, setDetailsOpen] = useState(false);

  const handleDetails = () => {
    setDetailsOpen(!detailsOpen);
    setSelectedCard(item?.id ? item.id : 0);
  }

  const isCardSelected = selectedCardId === item.id;

  return (
    <>
      <CardContainer
        animate={animate}
        isCardSelected={isCardSelected}
        detailsOpen={detailsOpen}
        index={index}
      >

        <CardImage src={item.image} alt={item.title} />
          
        <CardDetails
          item={item}
          detailsOpen={detailsOpen}
          handleDetails={handleDetails}
          index={index}
        />
        
        {!detailsOpen && <CardContent>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <BtnDetails onClick={handleDetails}>ver detalhes</BtnDetails>
        </CardContent>}
        
      </CardContainer>
      
      {detailsOpen &&
        <ModalContainer detailsOpen={detailsOpen}
      />}
    </>
  )
}

export default Card