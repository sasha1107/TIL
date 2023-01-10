import { useEffect, useRef, useState } from "react";
import ListImg from "./components/ListImg";
import searchImg from "./imgApiAxios";
import "./app.css";
import Logo from "./assets/logo.png"
import Footer from "./components/Footer";
import {
  Cont,
  InputCont,
  LogoImg,
  BtnMore,
  Inp

} from "./app.style"

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const moreBtnRef = useRef(null);
  const [keyword, setKeyword] = useState("");

  const handleInp = (e) => {
    setKeyword(e.target.value);
  }

  const handleKeyword = async (e) => {
    if (e.type === "submit"){
      e.preventDefault();
    }
    const result = await searchImg(keyword, page);
    console.log(result);
    setImages(result);
  }

  const handleMorePage = async () => {
    setPage(page + 1);
  }

  useEffect(() => {
    (async () => {
    const result = await searchImg(keyword, page);
    console.log(result);
    setImages((prev) => [...prev, ...result]);
    })();
  }, [page])

  return (
    <>
    <Cont>
      <InputCont>
        <LogoImg src={Logo} alt=""/>
        <form onSubmit={handleKeyword}>
          <label htmlFor="keyword" className="ir">검색어를 입력하세요</label>
          <Inp type="text" id="keyword" value={keyword} onChange={handleInp}/>
        </form>
      </InputCont>
      <ListImg images={images}/>
      {images.length === 0 ? <></> : <BtnMore onClick={handleMorePage} ref={moreBtnRef}>MORE</BtnMore>}
    </Cont>
    <Footer />
      </>
  );
}
export default App;
