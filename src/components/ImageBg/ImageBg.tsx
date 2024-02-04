
import bgHome from '../../assets/bg-home.png';
import { ImageContainer } from './ImageBgStyles';

interface ImageBgProps {
  animate: boolean;
}

function ImageBg({animate}: ImageBgProps) {
  return (
    <ImageContainer animate={animate}>
      <img src={bgHome} alt="background" />
    </ImageContainer>
  )
}

export default ImageBg