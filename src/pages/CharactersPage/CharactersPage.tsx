import { MainContainer, CardContainer, ButtonNext } from "./CharactersPageStyles";
import ImageBg from "../../components/ImageBg";
import CardCharacter from "../../components/CharactersPage/CardCharacter";
import RightArrow from '../../assets/right-arrow.svg';
import LeftArrow from '../../assets/left-arrow.svg';
import charactersData from "../../data/charactersData";

import { useState } from "react";

function Personagens() {
  // Estado para controlar o início do array de personagens
  const [start, setStart] = useState(0);

  // Função para avançar para o próximo card 
  //prevStart + 1 -> para avançar para o próximo card
  const handleNext = () => {
    setStart(prevStart => (prevStart + 1) % charactersData.length);
  }

  return (
    <MainContainer>
      <ImageBg animate={false} />

      <ButtonNext position='left' show={false}>
        <img src={LeftArrow} alt="Left Arrow" />
      </ButtonNext>

      <CardContainer>
        {/* Sempre mostrar 3 Cards, para isso um array [0,1,2] */}
        {[0, 1, 2].map(i => {
          //Para documentação 
          //-------------------------------------------------
          // (start + i) % charactersData.length -> para não dar erro de index
          // se o start + i for maior que o tamanho do array, ele volta para o começo
          // Exemplo: start = 2, i = 1, charactersData.length = 5
          // (2 + 1) % 5 = 3
          // (2 + 2) % 5 = 4
          // (2 + 3) % 5 = 0
          // (2 + 4) % 5 = 1
          // (2 + 5) % 5 = 2
          // Esse cálculo faz com que o array [0,1,2] seja sempre mostrado independente do valor de start charactersData[(start + i) % charactersData.length] -> pega o personagem correto para ser mostrado

          const character = charactersData[(start + i) % charactersData.length];
          return (
            <CardCharacter
              key={i}
              title={character.title}
              description={character.description}
              image={character.image}>
            </CardCharacter>
          );
        })}
      </CardContainer>

      <ButtonNext onClick={handleNext} position="right" show={true}>
        <img src={RightArrow} alt="Right Arrow" />
      </ButtonNext>
      
    </MainContainer>
  )
}

export default Personagens