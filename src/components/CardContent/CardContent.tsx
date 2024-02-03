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
                  {!item.available && (
                    <>
                      <h3>Disponível em streaming:</h3>
                      <ImageIconContainer needBg={true}>
                        <img src={logoDisney} alt="" />
                      </ImageIconContainer>
                    </>
                  )}

                  {item.available && (
                    <>
                      <h3>Disponível para compra::</h3>
                      <ImageIconContainer needBg={false}>
                      {item.available.map((icon) => (
                        <img src={icon} alt="" />
                      ))}
                      </ImageIconContainer>
                    </>
                  )}
                </Available>
              </Content>
            )}
          </>
  )
}

export default CardContent