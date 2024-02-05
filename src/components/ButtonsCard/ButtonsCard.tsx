import { ButtonCard, ButtonsContainer } from './ButtonsCardStyles'
import Arrow from '../../assets/arrow.svg'
import { CardItem } from '../../types/cardItem';

interface ButtonsNextCardProps {
  data: CardItem[];
  setStart: (value: number | ((prevVal: number) => number)) => void;
}

function ButtonsCard({ data, setStart }: ButtonsNextCardProps) {
  const handleNext = () => {
    setStart(prevStart => (prevStart + 1) % data.length);
  }

  const handlePrevious = () => {
    setStart(prevStart => {
      return prevStart === 0 ? data.length - 1 : prevStart - 1;
    });
  };

  return (
    <ButtonsContainer>
      <ButtonCard onClick={handleNext} position={'right'} >
          <img src={Arrow} alt="Arrow" />
      </ButtonCard>
      <ButtonCard onClick={handlePrevious} position={'left'} >
          <img src={Arrow} alt="Arrow" />
      </ButtonCard>
    </ButtonsContainer>
    
  )
}

export default ButtonsCard