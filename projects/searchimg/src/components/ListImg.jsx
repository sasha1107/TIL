import ItemImg from "./ItemImg"

export default function ListImg({images}) {
  console.log(images)
  const renderImages = images.map((image) => {
    return <ItemImg key={image.id} image={image}/>
  })
  return (
    <ul>
      {renderImages}
    </ul>
  )
}
