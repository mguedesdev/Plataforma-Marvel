import star from '../../assets/star.svg';
import iconClose from '../../assets/icon-close.png';
import { CardDetailsContainer, CardDetailsContent, BtnClose } from './CardDetailsStyles';
import { CardItem } from '../../types/cardItem';
import CardContent from '../CardContent/CardContent';

interface CardDetailsProps {
  item: CardItem;
  detailsOpen: boolean;
  handleDetails: () => void;
  index: number;
}

function CardDetails({ item, detailsOpen, handleDetails, index}: CardDetailsProps) {
  const isMovie = item.criticRating !== undefined;
  return (
    <>
      {detailsOpen &&
      <CardDetailsContainer>   
        <CardDetailsContent index={index} isMovie={isMovie}>
          <h1>{item.title}</h1>

          {item.appearances && (
              <div>
                <h2>Aparições</h2>
                <ul>
                  {item.appearances.map((appearance, index) => (
                    <li key={index}>{appearance}</li>
                  ))}
                </ul>
              </div>
            )}

          {item.criticRating && <CardContent item={item} />}
          
          <div>
            <h3>{isMovie ? "Crítica" : "Avaliações dos Fãs"}</h3>
            {Array.from({ length: 5 }, (_, i) => (
              <img
                key={i}
                src={star}
                style={{
                  filter: i < (isMovie ? item.criticRating ?? 0 : item.fanRating ?? 0) ? 'grayscale(0%)' : 'grayscale(100%)',
                }}
              />
            ))}
          </div>
          
        </CardDetailsContent>
        
        <BtnClose
          src={iconClose}
          alt="CloseButton"
          onClick={handleDetails}
        />

      </CardDetailsContainer>}
    </>
  )
}

export default CardDetails