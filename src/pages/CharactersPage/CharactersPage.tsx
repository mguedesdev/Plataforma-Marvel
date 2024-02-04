import MainPage from "../../components/MainPage/MainPage";
import ImageBg from "../../components/ImageBg";
import RightArrow from '../../assets/right-arrow.svg';
import LeftArrow from '../../assets/left-arrow.svg';
import ButtonsCard from "../../components/ButtonsCard/ButtonsCard";
import { MainContainer } from "../../styles/ContainerPageStyles";

import charactersData from "../../data/charactersData";
import { useState } from "react";

function CharactersPage() {
  const [start, setStart] = useState(0);

  const handleNext = () => {
    setStart(prevStart => (prevStart + 1) % charactersData.length);
  }

  const handlePrevious = () => {
    setStart(prevStart => (prevStart - 1) % charactersData.length);
  }

  return (
    <MainContainer>
      <ImageBg animate={false} />

      <MainPage data={charactersData} start={start}/>

      <ButtonsCard
        nextPreviousCard={handleNext}
        start={true} Arrow={RightArrow}
        position='right'
      />

      <ButtonsCard
        nextPreviousCard={handlePrevious}
        start={start > 0}
        Arrow={LeftArrow}
        position='left'
      />
    </MainContainer>
  )
}

export default CharactersPage