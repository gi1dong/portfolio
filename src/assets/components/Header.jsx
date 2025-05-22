import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  // 메뉴의 열림/닫힘 상태를 관리할 state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(""); // 필터 상태 관리

  // 메뉴 열기/닫기 함수
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // 상태 반전 (true ↔ false)
  };

  // 필터 변경 처리 함수
  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value); // 선택된 필터 상태 변경
  };

  // 메뉴 항목 (예시)
  const menuItems = [
    { id: 1, name: "휠라 언더웨어(FILA)", description: "Mobile-only layout", filter: "Mobile-only", link: "https://gi1dong.github.io/fila/index.html" },
    { id: 2, name: "디즈니 (Disney)", description: "Desktop-only layout", filter: "Desktop-only", link: "https://gi1dong.github.io/Disney/index.html" },
    { id: 3, name: "우알롱(wooalong)", description: "Desktop-only layout", filter: "Desktop-only", link: "https://gi1dong.github.io/wooalong/index.html" },
    { id: 4, name: "꽃중년", description: "Responsive layout", filter: "Responsive", link: "https://gi1dong.github.io/2024/page/flower/index.html" },
    { id: 5, name: "젠틀 몬스터(gentlemonster)", description: "Responsive layout", filter: "Responsive", link: "https://gi1dong.github.io/gentlemonster/index.html" },
    { id: 6, name: "탬버린즈(TAMBURINS)", description: "Responsive layout", filter: "Responsive", link: "https://gi1dong.github.io/tamburins/index.html" },
    { id: 7, name: "개발 일지", description: "꾸준히 정리하여 업데이트하고 있습니다.", filter: "Responsive", link: "https://o1df567576shd324df.notion.site/10a8d50ce1688091860dda556b0ffbc8?pvs=143" },
    { id: 8, name: "감정 일기장", description: "react 활용 감정 기록 공간", filter: "Responsive", link: "https://emotional-diary-kbm.vercel.app/" },
    { id: 9, name: "TIFFANY & CO", description: "Responsive layout", filter: "Responsive", link: "https://gi1dong.github.io/2024/page/tiffany_co/index.html" },
  ];

  // 선택된 필터에 맞는 메뉴 항목 필터링
  const filteredItems = menuItems.filter((item) => {
    return selectedFilter ? item.filter === selectedFilter : false;
  });

  // 스크롤 방지 및 해제 효과
  useEffect(() => {
    if (isMenuOpen) {
      // 컴포넌트가 활성화될 때 스크롤 금지
      document.body.style.overflow = "hidden";
    } else {
      // 컴포넌트가 비활성화될 때 스크롤 다시 열기
      document.body.style.overflowY = "auto"; // y축 (수직) 스크롤 자동
    }

    // 컴포넌트가 언마운트될 때 스크롤을 자동으로 해제
    return () => {
      document.body.style.overflowY = "auto"; // y축 (수직) 스크롤 자동
    };
  }, [isMenuOpen]);

  // 메뉴가 닫힐 때 필터 초기화
  useEffect(() => {
    if (!isMenuOpen) {
      setSelectedFilter(""); // 메뉴가 닫힐 때 필터 초기화
    }
  }, [isMenuOpen]);

  return (
    <div>
      <header className="Header">
        <button
          className={`MenuOpen ${isMenuOpen ? "active" : ""}`}
          type="button"
          onClick={toggleMenu}
        >
          <span className={`Nav-icon ${isMenuOpen ? "active" : ""}`}></span>
        </button>
      </header>
      <aside className={isMenuOpen ? "Open" : "Closed"}>
        <div className="Inner">
          {/* 링 영역 */}
          <div className="FilterBox">
            <select
              id="category_filter"
              value={selectedFilter}
              onChange={handleFilterChange}
            >
              <option value="">Select Layout</option>
              <option value="Mobile-only">Mobile-only</option>
              <option value="Desktop-only">Desktop-only</option>
              <option value="Responsive">Responsive</option>
            </select>
          </div>

          {/* 메뉴 항목 */}
          <nav>
            {selectedFilter && (
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
            )}
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Header;
