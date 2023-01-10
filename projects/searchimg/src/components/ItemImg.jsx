import styled from "styled-components"
// import GoSVG from "../assets/box-arrow.svg"
// import DownloadSVG from "../assets/download.svg"
const GoSVG = (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.36364 13.5C6.36364 13.7761 6.58749 14 6.86364 14H13.5C14.3284 14 15 13.3284 15 12.5V2.5C15 1.67157 14.3284 1 13.5 1H3.5C2.67157 1 2 1.67157 2 2.5V9.13636C2 9.41251 2.22386 9.63636 2.5 9.63636C2.77614 9.63636 3 9.41251 3 9.13636V2.5C3 2.22386 3.22386 2 3.5 2H13.5C13.7761 2 14 2.22386 14 2.5V12.5C14 12.7761 13.7761 13 13.5 13H6.86364C6.58749 13 6.36364 13.2239 6.36364 13.5Z" fill="#F8F8F8"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 5.5C11 5.22386 10.7761 5 10.5 5H5.5C5.22386 5 5 5.22386 5 5.5C5 5.77614 5.22386 6 5.5 6H9.29289L1.14645 14.1464C0.951184 14.3417 0.951184 14.6583 1.14645 14.8536C1.34171 15.0488 1.65829 15.0488 1.85355 14.8536L10 6.70711V10.5C10 10.7761 10.2239 11 10.5 11C10.7761 11 11 10.7761 11 10.5V5.5Z" fill="#F8F8F8"/>
</svg>
)

const DownloadSVG = (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 9.90002C0.776142 9.90002 1 10.1239 1 10.4V12.9C1 13.4523 1.44772 13.9 2 13.9H14C14.5523 13.9 15 13.4523 15 12.9V10.4C15 10.1239 15.2239 9.90002 15.5 9.90002C15.7761 9.90002 16 10.1239 16 10.4V12.9C16 14.0046 15.1046 14.9 14 14.9H2C0.895431 14.9 0 14.0046 0 12.9V10.4C0 10.1239 0.223858 9.90002 0.5 9.90002Z" fill="white"/>
<path d="M7.64645 11.8536C7.84171 12.0488 8.15829 12.0488 8.35355 11.8536L11.3536 8.85355C11.5488 8.65829 11.5488 8.34171 11.3536 8.14645C11.1583 7.95118 10.8417 7.95118 10.6464 8.14645L8.5 10.2929V1.5C8.5 1.22386 8.27614 1 8 1C7.72386 1 7.5 1.22386 7.5 1.5V10.2929L5.35355 8.14645C5.15829 7.95118 4.84171 7.95118 4.64645 8.14645C4.45118 8.34171 4.45118 8.65829 4.64645 8.85355L7.64645 11.8536Z" fill="white"/>
</svg>
)
const ImgLi = styled.li`
  list-style-type: none;
  width: 200px;
  height: 200px;
  position: relative;
  background-color: black;
  & button {
    cursor: pointer;
    background-color: black;
    padding: 0;
    z-index: 10;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 0;
    border: 1px solid white;
    &:hover {
      z-index: 30;
    }
  }
    & div {
      display: flex;
      position: absolute;
      top: calc(100px - 50px + 25px);
      left: calc(45px);
      justify-content: center;
      align-items: center;
      gap: 10px;
      z-index: 10;
      &:hover {
      z-index: 30;
    }
  }
    & img{
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(50, 50);
      width: 100%;
      height: 100%;
      object-fit: cover;
      margin: auto;
      z-index: 20;
      &:hover {
          opacity: 0.5;
          z-index: 0;
          & button {
            color: red;
          }
        & button {
          display: inline-block;
        }
      }
  }
`
export default function ItemImg({image}) {

  const handleClickImg = () => {
    window.open(image.links.html, '_blank')
  }
  const handleDownloadImg = () => {
    console.log(image)
    window.open(image.links.download, '_blank')
  }
  return (
    <ImgLi>
      <img src={image.urls.thumb} alt={image.alt_description} />
      <div>
        <button onClick={handleClickImg}>
          go
          {GoSVG}
        </button>
        <button onClick={handleDownloadImg}>
          download
          {DownloadSVG}
        </button>
      </div>
      
    </ImgLi>
  )
}