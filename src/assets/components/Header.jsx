import React, { useState,useEffect } from "react";
import "./Header.css";
import CustomSelect from "./CustomSelect";
// 필터링 대상 데이터 (allItems)
const allItems = [
  { id: 1, name: "휠라 언더웨어(FILA)", category: "2", url:"https://gi1dong.github.io/fila/index.html"  },
  { id: 2, name: "디즈니 (Disney)", category: "3",url:"https://gi1dong.github.io/Disney/index.html" },
  { id: 3, name: "젠틀 몬스터(gentlemonster)", category: "4" ,url:"https://gi1dong.github.io/gentlemonster/index.html"},
  { id: 4, name: "탬버린즈(TAMBURINS)", category: "4" ,url:"https://gi1dong.github.io/tamburins/index.html"},
    { id: 5, name: "TIFFANY & CO", category: "4" ,url:"https://gi1dong.github.io/2024/page/tiffany_co/index.html"},
       { id: 6, name: "Aesop", category: "2" ,url:"https://gi1dong.github.io/aesop/index.html"},
              { id: 7, name: "개발 일지", category: "4" ,url:"https://o1df567576shd324df.notion.site/10a8d50ce1688091860dda556b0ffbc8?pvs=143"},
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [filteredItems, setFilteredItems] = useState([]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOptionChange = (option) => {
    setSelectedFilter(option);

    if (option.value === "all") {
      setFilteredItems(allItems);
    } else {
      const filtered = allItems.filter(item => item.category === option.value);
      setFilteredItems(filtered);
    }
  };
 // isMenuOpen이 false가 되면 필터 초기화
  useEffect(() => {
    if (!isMenuOpen) {
      setSelectedFilter(null);
      setFilteredItems([]);
    }
  }, [isMenuOpen]);

  const options = [
  { label: "All", value: "all" },    
    { label: "Mobile-only", value: "2" },
    { label: "Desktop-only", value: "3" },
    { label: "Responsive", value: "4" }
  ];

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
          <div className="CustomSelect">
            <CustomSelect options={options} onChange={handleOptionChange} />
          </div>

          {/* ✅ 선택했을 때만 결과 보이기 */}
          {selectedFilter && (
            <div className="ResultList">
              {filteredItems.length > 0 ? (
                <ul>
                  {filteredItems.map((item) => (
                    <li key={item.id}>
                           <a href={item.url} target="_blank" rel="noopener noreferrer">
                          {item.name}
                            </a>
                          </li>
                  ))}
                </ul>
              ) : (
                <p>결과가 없습니다.</p>
              )}
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};

export default Header;
