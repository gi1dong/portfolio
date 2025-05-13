import React, { useState,useEffect } from "react";
import "./Header.css";

const Header = () => {

  // 메뉴의 열림/닫힘 상태를 관리할 state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태 관리
  const searchInputRef = React.useRef(null); // input 참조

  // 메뉴 열기/닫기 함수
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // 상태 반전 (true ↔ false)
  };

  // 검색어 입력 처리
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

      // 검색어 초기화
      const handleClearSearch = () => {
        setSearchQuery(""); // 검색어 초기화
      };
 // 검색 버튼 클릭 시 처리 함수
 const handleSearchButtonClick = () => {
  if (searchQuery === "") {
    searchInputRef.current.focus(); // 검색어가 비었으면 input에 focus
  } else {
    // 검색어가 비어 있지 않다면
    const isValidSearch = menuItems.some((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (!isValidSearch) {
      // 유효한 검색어가 아닐 경우 팝업 창 띄우기
      alert("Search for the name of the revamped page.");
      setSearchQuery(""); // 검색어 초기화
    } else {
      // 검색어가 유효하면 검색을 실행
      console.log("검색어:", searchQuery);
    }
  }
};
  // 메뉴 항목 (예시)
  const menuItems = [
    { id: 1, name: "휠라 언더웨어(FILA)", description: "Mobile-only layout", link: "https://gi1dong.github.io/fila/index.html" },
    { id: 2, name: "디즈니 (Disney)", description: "Desktop-only layout", link: "https://gi1dong.github.io/Disney/index.html" },
    { id: 3, name: "우알롱(wooalong)", description: "Desktop-only layout", link: "https://gi1dong.github.io/wooalong/index.html" },
    { id: 4, name: "꽃중년", description: "Responsive layout", link: "https://gi1dong.github.io/2024/page/flower/index.html" },
    { id: 5, name: "젠틀 몬스터(gentlemonster)", description: "Responsive layout", link: "https://gi1dong.github.io/gentlemonster/index.html" },
    { id: 6, name: "탬버린즈(TAMBURINS)", description: "Responsive layout", link: "https://gi1dong.github.io/tamburins/index.html" },
    { id: 7, name: "개발 일지", description: "꾸준히 정리하여 업데이트하고 있습니다.", link: "https://o1df567576shd324df.notion.site/10a8d50ce1688091860dda556b0ffbc8?pvs=143" },
    { id: 8, name: "감정 일기장", description: "react 활용 감정 기록 공간", link: "https://emotional-diary-kbm.vercel.app/" },
    { id: 9, name: "TIFFANY & CO", description: "Responsive layout", link: "https://gi1dong.github.io/2024/page/tiffany_co/index.html" },
  ];
  
  // 검색어
  // 검색어에 맞는 항목 필터링
  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  // 스크롤 방지 및 해제 효과
  useEffect(() => {
    if (isMenuOpen) {
      // 컴포넌트가 활성화될 때 스크롤 금지
      document.body.style.overflow = 'hidden';
    } else {
      // 컴포넌트가 비활성화될 때 스크롤 다시 열기
      document.body.style.overflow = 'auto';
    }

    // 컴포넌트가 언마운트될 때 스크롤을 자동으로 해제
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);


  return (
    <div>
      <header className="Header">
        <button className={`MenuOpen ${isMenuOpen ? 'active' : ''}  `}type="button" onClick={toggleMenu}>
        <span className={`Nav-icon ${isMenuOpen ? 'active' : ''}`}></span>
        </button>
      </header>
      <aside className={isMenuOpen ? "Open" : "Closed"}>
        <div className="Inner">
          <div className="SearchBox">
            <input id="keyword_header" type="text" name=""  placeholder="Search for the name of the revamped page."    value={searchQuery}     ref={searchInputRef} // input에 ref 추가
            
            onChange={handleSearchChange}
              />
            <span id="btn_search_x_header" className="X"     onClick={handleClearSearch}></span>
            <button id="btn_search_header" type="button"       onClick={handleSearchButtonClick} ></button>
                        </div>
          {/* 여기에 사이드 메뉴 내용을 추가할 수 있습니다. */}

        {/* 메뉴 항목 */}
        <nav>
            <ul>
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <li key={item.id}>
                    {/* 링크를 새 창으로 열기 위해 target="_blank" 추가 */}
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.name}
                    </a>
                    <p>{item.description}</p>
                  </li>
                ))
              ) : (
                <li>No results found</li>
              )}
            </ul>
          </nav>
        </div>
      </aside>
    </div>
    
  );
};

export default Header;