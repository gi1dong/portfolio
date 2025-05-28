import React, {useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/effect-coverflow";
import './stylesPc.css';
import Header from '../components/Header';

// 이미지 임포트
import disney from "../images/thumbnail.jpg";
import Wooalong from "../images/wooalong.png";
import gentlemonster from "../images/gentlemonster.jpg";
import Tamburins from "../images/Tamburins.jpg";

// 비디오 임포트
import mainBgVideo from "/Bg/mainBg.mp4";
import tiffany01 from '../images/tiffany01_mo.mp4';
import VideoSlide from '../components/VideoSlide';
import ImageSlide from '../components/ImageSlide';
import DualSlide from '../components/DualSlide';
import ListSlide from '../components/ListSlide';
// import { EffectCoverflow, Pagination } from "swiper";
import fila01 from "../images/fila01.png";
import fila02 from "../images/fila02.png";
import fila03 from "../images/fila03.jpg";

const filaImages = [fila01, fila02, fila03];

const chosenImage = filaImages[Math.floor(Math.random() * filaImages.length)];
const bgImage = document.getElementsByTagName("img");
bgImage.src=`img/${chosenImage}`

const Home=()=> {
  // ref
  const swiperRef = useRef(null);
  const videoRef = useRef([]);
  const videoRef02 = useRef([]);
  const idRef=useRef();

  // main slide data⭐⭐⭐⭐⭐
  const slides = [
    {
      type: 'video',
      videoSrc: mainBgVideo,
      title: 'Web Publishing',
      subtitle: '감각적인 웹 퍼블리셔 김보미 입니다.',
      description: '항상 "할 수 있다"는 자신감으로 스스로 발전하는 모습을 보여드리겠습니다.',
      buttonText: 'Please right drag !',
      buttonLink: 'https://o1df567576shd324df.notion.site/7c83071e0b894a01b81b097e3c18187e',
      svgContent: false,  
    },
    {
      type: 'image',
      imageSrc: disney,
      title: 'Disney',
      description: 'PC-specific',
      buttonText: 'Drag it up',
      buttonLink: 'https://gi1dong.github.io/Disney/index.html',
    },
    {
      type: 'list',
      items: [
        {
          title: 'Simple counter',
          buttonText: '필기',
          buttonLink: 'https://o1df567576shd324df.notion.site/11-15-18c8d50ce16880be9c54f8a3109b8f6e',
          descriptionText:'작업물',
          descriptionLink: 'https://simple-counter-zeta.vercel.app',
        },
        {
          title: 'To do list',
          buttonText: '필기',
          buttonLink: 'https://o1df567576shd324df.notion.site/10a8d50ce1688091860dda556b0ffbc8',
          descriptionText:'작업물',
          descriptionLink: 'https://todolist-sandy-zeta.vercel.app/',
        },
        {
          title: '감정 일기장',
          buttonText: '필기',
          buttonLink: 'https://o1df567576shd324df.notion.site/10a8d50ce1688091860dda556b0ffbc8',
          descriptionText:'작업물',
          descriptionLink: 'https://emotional-diary-kbm.vercel.app/',
        },
      ],
    },
    {
      type: 'image',
      imageSrc: Wooalong,
      title: 'Wooalong',
      buttonText: '[AWD]PC-specific design',
      buttonLink: 'https://gi1dong.github.io/wooalong/index.html',
    },
    {// fila,aseop
      type: 'dual',
      items: [
        {
          type: 'image', // 이미지 항목
          imageSrc:chosenImage,
          title: 'Fila',
          buttonText: '[AWD]Mo-specific design',
          buttonLink: 'https://gi1dong.github.io/fila/index.html',
        },
        {
          type: 'video', // 비디오 항목
          videoSrc: "/assets/images/aesop.mp4", // 비디오 소스
          title: 'Aesop',
          buttonText: '[AWD]Mo-specific design',
          buttonLink: 'https://gi1dong.github.io/aesop/index.html',
        }
      ]    
    },
    {
      type: 'image',
      imageSrc: Tamburins,
      title: 'Tamburins',
      buttonText: '[RWD]',
      buttonLink: 'https://gi1dong.github.io/tamburins/index.html',
    },
    {/*gentlemonster*/
      type: 'image',
      imageSrc: gentlemonster,
      title: 'Gentlemonster',
      buttonText: '[RWD]',
      buttonLink: 'https://gi1dong.github.io/gentlemonster/index.html',
    },
        {/*'Tiffany&CO.'*/
          type: 'video',
          videoSrc: tiffany01,
      title: 'Tiffany&CO.',
      buttonText: '[RWD] 코드 리팩토링 중입니다.',
      buttonLink: 'https://gi1dong.github.io/2024/page/tiffany_co/index.html',
      isSvgIncluded: true, 
      svgContent: true,
    },
  ];

  // 비디오 자동 실행
  useEffect(() => {
    if (videoRef.current[0]) {
      videoRef.current[0].play().catch((error) => {
        console.error("Error playing video: ", error);
      });
    }
    if (videoRef02.current[0]) {
      videoRef02.current[0].play().catch((error) => {
        console.error("Error playing video: ", error);
      });
    }
  }, []);

  // 슬라이드 변경 시 비디오 재생
  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.activeIndex;
    const slide = slides[activeIndex];
    if (slide.type === 'video') {
      if (videoRef.current[activeIndex]) {
        videoRef.current[activeIndex].play().catch((error) => {
          console.error("Error playing video: ", error);
        });
      }
    }
  };

  useEffect(() => {
  // 기존 비디오 자동 재생
  if (videoRef.current[0]) {
    videoRef.current[0].play().catch((error) => {
      console.error("Error playing video: ", error);
    });
  }
  if (videoRef02.current[0]) {
    videoRef02.current[0].play().catch((error) => {
      console.error("Error playing video: ", error);
    });
  }

  // 🚫 전체화면 자동 진입 차단
  const handleFullscreenChange = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };
  document.addEventListener('fullscreenchange', handleFullscreenChange);

  return () => {
    document.removeEventListener('fullscreenchange', handleFullscreenChange);
  };
}, []);
  return (
    <div>
      <Header/>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        ref={swiperRef}
        loop={true}
        onSlideChange={handleSlideChange}
        navigation={{ nextEl: '.Arrow' }}
        pagination={{ clickable: true }}
        slidesPerView={1}>
          
          {slides.map((slide, index) => { 
  // `map`은 각 슬라이드를 순차적으로 처리합니다.
  switch (slide.type) {
    case 'video':
      return(
      <SwiperSlide key={index}>
        <VideoSlide {...slide}/>
          {slide.isSvgIncluded && (
            <div dangerouslySetInnerHTML={{ __html: slide.svgContent }} />
          )}
           </SwiperSlide>
      )
    case 'image':
      return (
        <SwiperSlide key={index}>
          <ImageSlide {...slide} />
        </SwiperSlide>
      );
    case 'dual':
      return (
        <SwiperSlide key={index}>
          <DualSlide {...slide} />
        </SwiperSlide>
      );
    case 'list':
      return (
        <SwiperSlide key={index}>
          <ListSlide items={slide.items} />
        </SwiperSlide>
      );
    default:
      return null; // 기본값 처리 (불필요한 경우 생략 가능)
  }
})}
      </Swiper>
    </div>
  );
};
export default Home;