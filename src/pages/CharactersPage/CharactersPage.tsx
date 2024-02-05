import MainPage from "../../components/MainPage/MainPage";
import ImageBg from "../../components/ImageBg/ImageBg";
import ButtonsCard from "../../components/ButtonsCard/ButtonsCard";
import { MainContainer, MainContent } from "../../styles/ContainerPageStyles";

import charactersData from "../../data/charactersData";
import { useState } from "react";

function CharactersPage() {
  const [start, setStart] = useState(0);

  return (
    <MainContainer>
      <ImageBg animate={false} />
      
      <MainContent>
        <MainPage data={charactersData} start={start}/>
      </MainContent>

      <ButtonsCard
        data={charactersData}
        setStart={setStart}
      />
    </MainContainer>
  )
}

export default CharactersPage