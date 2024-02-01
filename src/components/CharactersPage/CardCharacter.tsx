import { CardContainer, CardContent } from "./CardCharacterStyles"

interface CardCharacterProps {
  character : {
    id: number;
    title: string;
    description: string;
    image: string;
  }
  isEntering?: boolean;
  isExiting?: boolean;
}

function CardCharacter({character, isEntering, isExiting}: CardCharacterProps) {
  return (
    <CardContainer isEntering={isEntering || false} isExiting={isExiting || false} >
      <img src={character.image} alt={character.title} />
      <CardContent>
        <h1>{character.title}</h1>
        <p>{character.description}</p>
        <button>ver detalhes</button>
      </CardContent>
    </CardContainer>
  )
}

export default CardCharacter