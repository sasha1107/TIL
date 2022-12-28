import { useEffect, useState } from "react";
import ListImg from "./components/ListImg";
import SearchBar from "./components/SearchBar";
import searchImg from "./imgApiAxios";
// import searchImg from "./imgApiFetch";

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const handleKeyword = async (keyword) => {
    const result = await searchImg(keyword, page);
    console.log(result);
    setImages(result);
  }
  const handleMorePage = () => {
    setPage(page + 1);
  }
  useEffect(() => {

  }, [page])
  return (
    <>
      <SearchBar searching={handleKeyword}/>
      <ListImg images={images}/>
      <button onClick={handleMorePage}>MORE</button>
    </>
  );
}
export default App;
