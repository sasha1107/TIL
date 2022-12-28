export default function ItemImg({image}) {
  return (
    <li>
      <img src={image.urls.thumb} alt={image.alt_description}/>
    </li>
  )
}