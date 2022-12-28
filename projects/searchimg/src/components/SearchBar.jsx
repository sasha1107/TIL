import { useState } from "react";
import styled from "styled-components";
import "../app.css"

const Inp = styled.input`
  border: 1px solid #5f6368;
  border-radius: 24px;
  padding: 8px 14px;
  width: 35%;
`
export default function SearchBar({searching}) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searching(keyword);
  }

  const handleInp = (e) => {
    setKeyword(e.target.value);
  }

  return (
    <nav>
      <form onSubmit={handleSubmit}>
        <label htmlFor="keyword" className="ir">검색어를 입력하세요</label>
        <Inp type="text" id="keyword" value={keyword} onChange={handleInp}/>
        {/* <button>검색</button> */}
      </form>
    </nav>
  )
}
