import { CardContainer, CardContent } from "./CardCharacterStyles"

interface CardCharacterProps {
  title: string;
  description: string;
  image: string;
}

function CardCharacter({title, description, image}: CardCharacterProps) {
  return (
    <CardContainer>
      <img src={image} alt="" />
      <CardContent>
        <h1>{title}</h1>
        <p>{description}</p>
        <button>ver detalhes</button>
      </CardContent>
    </CardContainer>
  )
}

export default CardCharacter