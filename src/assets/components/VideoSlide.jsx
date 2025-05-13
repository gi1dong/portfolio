import React, { useState, useEffect, useRef } from 'react';
import '../pages/stylesPc.css';
import HeartDrawingEffect from '../components/HeartDrawingEffect';

const VideoSlide = ({svgContent, videoSrc, title, description, buttonText, buttonLink }) => {
  const [isInViewport, setIsInViewport] = useState(false); // 뷰포트에 들어왔는지 여부
  const videoSlideRef = useRef(null); // VideoSlide 컴포넌트의 ref

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // entry.isIntersecting: 요소가 뷰포트에 들어왔을 때 true
        if (entry.isIntersecting) {
          setIsInViewport(true); // 뷰포트에 들어왔으면 isInViewport를 true로 설정
        }
      },
      { threshold: 0.1 } // 요소가 50% 이상 보일 때 트리거
    );

    if (videoSlideRef.current) {
      observer.observe(videoSlideRef.current); // observer를 요소에 적용
    }

    // 컴포넌트 언마운트 시 observer 해제
    return () => {
      if (videoSlideRef.current) {
        observer.unobserve(videoSlideRef.current);
      }
    };
  }, []);

  return (
    <div className="VideoSlide" ref={videoSlideRef}>
      <video src={videoSrc} autoPlay muted loop />
         {svgContent && <HeartDrawingEffect />}
      <div className="MainTxt">
        <h3>{title}</h3>
        <p>{description}</p>
        <a className='BtnTxt01' href={buttonLink}>{buttonText}</a>
      </div>
    </div>
  );
};

export default VideoSlide;
