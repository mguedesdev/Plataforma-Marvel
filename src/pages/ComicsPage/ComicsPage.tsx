import MainPage from "../../components/MainPage/MainPage";
import ImageBg from "../../components/ImageBg/ImageBg";
import ButtonsCard from "../../components/ButtonsCard/ButtonsCard";
import { MainContainer, MainContent } from "../../styles/ContainerPageStyles";

import comicsData from "../../data/comicsData";
import { useState } from "react";

function ComicsPage() {
  const [start, setStart] = useState(0);

  return (
    <MainContainer>
      <ImageBg animate={false} />
      <MainContent>
        <MainPage data={comicsData} start={start}/>
      </MainContent>

      <ButtonsCard
        data={comicsData}
        setStart={setStart}
      />
    </MainContainer>
  )
}

export default ComicsPage