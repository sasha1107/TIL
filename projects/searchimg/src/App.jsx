import { useEffect, useRef, useState } from "react";
import ListImg from "./components/ListImg";
import SearchBar from "./components/SearchBar";
import searchImg from "./imgApiAxios";
// import searchImg from "./imgApiFetch";
import styled from "styled-components";
import "./app.css";
import Logo from "./assets/logo.png"
import Footer from "./components/Footer";

const Cont = styled.div`
  padding: 100px;
  overflow: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const InputCont = styled.div`
  width: 100%;
  text-align: center;
`
const LogoImg = styled.img`
  width: 35%;
`
const BtnMore = styled.button`
  &:disabled {
    display: none;
  }
`
function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const moreBtnRef = useRef(null);

  const handleKeyword = async (keyword) => {
    const result = await searchImg(keyword, page);
    console.log(result);
    setImages(result);
    moreBtnRef.current.disabled = false;
  }
  const handleMorePage = () => {
    setPage(page + 1);
  }
  useEffect(() => {

  }, [page])
  return (
    <>
    <Cont>
      <InputCont>
        <LogoImg src={Logo} alt=""/>
        <SearchBar searching={handleKeyword}/>
      </InputCont>
      <ListImg images={images}/>
      <BtnMore onClick={handleMorePage} disabled ref={moreBtnRef}>MORE</BtnMore>
    </Cont>
    <Footer />
      </>
  );
}
export default App;
