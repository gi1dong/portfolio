import React, { useState, useEffect, useRef } from 'react';
import './CustomSelect.css';

const CustomSelect = ({ options, placeholder = "Select an option", onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const wrapperRef = useRef();

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    onChange && onChange(option);
  };

  return (
    <aside className={`custom-select-wrapper ${isOpen ? 'open' : ''}`} ref={wrapperRef}>
      <div className="custom-select" onClick={() => setIsOpen(prev => !prev)}>
        {selected ? selected.label : placeholder}
      </div>

      {isOpen && (
        <div className="custom-options">
          {options.map((opt, index) => (
            <div
              key={index}
              className="custom-option"
              onClick={() => handleSelect(opt)}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}

      <button className="search-button" onClick={() => alert(`검색: ${selected?.label || "선택 없음"}`)}>
        검색
      </button>
    </aside>
  );
};

export default CustomSelect;
