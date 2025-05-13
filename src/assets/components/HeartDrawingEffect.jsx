import React from 'react';
import '../pages/stylesPc.css'; // 스타일을 외부 CSS 파일로 관리할 경우

const HeartDrawingEffect = () => {
  return (
    <div className="heart-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100" // 하트의 비율을 유지하면서 화면에 맞게 확장
        width="100%" // 부모 요소의 크기를 기준으로 SVG가 확장되도록 설정
        height="100%" // 부모 요소의 크기를 기준으로 SVG가 확장되도록 설정
        className="heart-svg"
      >
        <path
          d="M50 80s30-20 30-40c0-10-8-18-18-18-7 0-12 5-12 11C50 41 50 31 50 31S50 41 50 34c0-6-5-11-12-11-10 0-18 8-18 18 0 20 30 40 30 40z"
          fill="transparent"
          stroke="#81d8d0"  // 선 색상
          strokeWidth="1"  // 선 두께를 1px로 설정
          strokeDasharray="200" // 경로의 길이에 맞게 설정
          strokeDashoffset="200" // 처음에 경로가 보이지 않게 설정
          className="heart-path"
        />
      </svg>

    </div>
  );
};

export default HeartDrawingEffect;
