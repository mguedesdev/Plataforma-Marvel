import { OverlayContainer } from "./OverlayStyles"


function Overlay( { detailsOpen }: { detailsOpen: boolean } ) {
  return (
    <OverlayContainer detailsOpen={detailsOpen}>
      &nbsp;
    </OverlayContainer>
  )
}

export default Overlay