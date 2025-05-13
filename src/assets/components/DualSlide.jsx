import React, { useState, useEffect } from "react";
import '../pages/stylesPc.css';
import aesopVideo from "../images/aesop.mp4";

const DualSlide = ({items}) => {
  // 이미지 상태 관리
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [opacity, setOpacity] = useState(1); // opacity 
  // 상태 추가

  // 이미지 배열
  // let imagesHalf = [
  //   "/src/assets/fila_logo01.png",
  //   "/src/assets/fila_logo02.png"
  // ];

   // 이미지 배열
   const imagesHalf = items[0].imageSrc; // items에서 이미지 배열 가져오기
   useEffect(() => {
    const interval = setInterval(() => {
      // opacity를 먼저 0으로 만들고, 이미지 전환 후 다시 1로 설정
      setOpacity(0);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
        setOpacity(1); // opacity를 다시 1로 설정
      }, 500); // opacity가 0으로 줄어드는 시간과 맞추기 위해 500ms 후에 이미지 전환
    }, 3000); // 3초마다 이미지 변경
    return () => clearInterval(interval); // 컴포넌트 언마운트 시 클린업
  }, [opacity]);

  //useeffect
  return (
  <div className="Dual">
        <div className="DualInner">
        <div className="ImageBox">
          <img
            src={imagesHalf[currentImageIndex]} // 현재 이미지 표시
            alt={`dynamic-image-${currentImageIndex}`}
            style={{
              opacity: opacity, // opacity 설정
              transition: "opacity 1s ease-in-out", // 부드러운 전환을 위한 transition 설정
              display: "block", // 이미지가 보이도록 설정
              width: "100%", // 이미지 크기 조정
              height: "auto", // 이미지 비율 유지
            }}
          />
                 {/* 이미지에 맞는 텍스트 */}
                  <div className="MainTxt">
                  <h3>{items[0].title}</h3> {/* 이미지에 대한 title */}
            <a className="BtnTxt01" target="_blank"  href={items[0].buttonLink} >{items[0].buttonText}</a> {/* 이미지에 대한 버튼 */}
          </div>
          </div>
      <div className="VideoBox"  >
        <video
          autoPlay
          loop
          muted
        
        >
          <source
                src={aesopVideo} // videoSrc가 없으면 기본 비디오 사용
                type="video/mp4"
              />
          Your browser does not support the video tag.
        </video>
           {/* 비디오에 맞는 텍스트 */}
           <div className="MainTxt">
            <h3>{items[1].title}</h3> {/* 비디오에 대한 title */}
            <a className="BtnTxt01" target="_blank"  href={items[1].buttonLink}>{items[1].buttonText}</a> {/* 비디오에 대한 버튼 */}
          </div>
      </div>
      </div>
  </div>
  );
}
export default DualSlide;
