import logoDisney from '../../assets/logos/logo-disney.png'
import { Content, Available, ImageIconContainer } from './CardContentStyles';

import { CardItem } from '../../types/cardItem';

interface MovieContentStylesProps {
  item: CardItem;
}

function CardContent({item}: MovieContentStylesProps) {
  return (
    <>
      {item.criticRating && (
        <Content>
          <p>{item.description}</p>
          <Available>
            <h3>Disponível em streaming:</h3>
            <ImageIconContainer>
              <img src={logoDisney} alt="" />
            </ImageIconContainer>
          </Available>
        </Content>
      )}
    </>
  )
}

export default CardContent