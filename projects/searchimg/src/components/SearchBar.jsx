import { useState } from "react";

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
        <label htmlFor="keyword">검색어를 입력하세요</label>
        <input type="text" id="keyword" value={keyword} onChange={handleInp}/>
        <button>검색</button>
      </form>
    </nav>
  )
}
