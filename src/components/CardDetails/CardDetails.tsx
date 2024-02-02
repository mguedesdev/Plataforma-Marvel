import star from '../../assets/star.svg';
import iconClose from '../../assets/icon-close.png';
import { CardDetailsContainer, CardDetailsContent, BtnClose } from './CardDetailsStyles';
import { CardItem } from '../../types/cardItem';

interface CardDetailsProps {
  item: CardItem;
  detailsOpen: boolean;
  handleDetails: () => void;
  index: number;
}

function CardDetails({ item, detailsOpen, handleDetails, index}: CardDetailsProps) {
  return (
    <>
      {detailsOpen && <CardDetailsContainer>   
        <CardDetailsContent
          index={index}
        >
          <h1>{item.title}</h1>

          <div>
            <h2>Aparições</h2>
            <ul>
              {item.appearances?.map((appearance, index) => {
                return <li key={index}>{appearance}</li>
              })}
            </ul>
          </div>

          <div>
            <h3>Avaliações dos Fãs</h3>
            {Array.from({ length: 5 }, (_, i) => (
              <img
                key={i}
                src={star}
                style={{ filter: i < (item.fanRating ?? 0) ? 'grayscale(0%)' : 'grayscale(100%)' }}
              />
            ))}
          </div>
          
        </CardDetailsContent>
        
        <BtnClose
          src={iconClose}
          alt="Close Details Button"
          onClick={handleDetails}
        />

      </CardDetailsContainer>}
    </>
  )
}

export default CardDetails