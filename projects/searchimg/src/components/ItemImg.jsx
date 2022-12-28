import styled from "styled-components"

const ImgLi = styled.li`
  list-style-type: none;
  width: 200px;
  height: 200px;
  position: relative;
    /* width: 500px; */
    /* height: 500px; */
  & img{
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(50, 50);
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: auto;
  }
`
export default function ItemImg({image}) {
  return (
    <ImgLi>
      <img src={image.urls.thumb} alt={image.alt_description}/>
    </ImgLi>
  )
}