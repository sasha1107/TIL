import ItemImg from "./ItemImg"
import styled from "styled-components"

const UlElem = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: .5em;
`
export default function ListImg({images}) {
  console.log(images)
  const renderImages = images.map((image) => {
    return <ItemImg key={image.id} image={image}/>
  })
  return (
    <UlElem>
      {renderImages}
    </UlElem>
  )
}
