import { ButtonCard } from './ButtonsCardStyles'

interface ButtonsNextCardProps {
  nextPreviousCard: () => void;
  start: boolean;
  Arrow: string;
  position: string;
}

function ButtonsCard({ nextPreviousCard, start, Arrow, position}: ButtonsNextCardProps) {
  return (
    <ButtonCard onClick={nextPreviousCard} position={position} show={start}>
        <img src={Arrow} alt="Arrow" />
    </ButtonCard>
  )
}

export default ButtonsCard