import React, { useEffect, useRef } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoEl = videoRef.current;

    // 브라우저 정책으로 자동 전체화면은 대부분 차단됨
    // 혹시라도 외부 코드나 버그로 인해 자동 진입을 시도할 경우 방어 코드
    const preventAutoFullscreen = () => {
      document.removeEventListener('fullscreenchange', onFullscreenChange);
      if (document.fullscreenElement && !userInitiated.current) {
        document.exitFullscreen();
      }
    };

    const onFullscreenChange = () => {
      if (document.fullscreenElement && !userInitiated.current) {
        document.exitFullscreen();
      }
    };

    const userInitiated = { current: false };

    // 전체화면 버튼 클릭 시에만 허용
    const handleFullscreenClick = () => {
      if (videoEl.requestFullscreen) {
        userInitiated.current = true;
        videoEl.requestFullscreen();
      }
    };

    // 스크롤 시 자동 진입 방지
    const handleScroll = () => {
      // 외부 스크립트에서 강제 fullscreen 시도를 막기 위한 안전장치
      if (document.fullscreenElement && !userInitiated.current) {
        document.exitFullscreen();
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('fullscreenchange', onFullscreenChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('fullscreenchange', onFullscreenChange);
    };
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        controls
        src="your-video.mp4"
        width="600"
      />
      <button onClick={() => {
        const videoEl = videoRef.current;
        if (videoEl) {
          videoEl.play(); // 재생 시작
        }
      }}>Play</button>
      <button onClick={() => {
        const videoEl = videoRef.current;
        if (videoEl && videoEl.requestFullscreen) {
          videoEl.requestFullscreen(); // 전체화면 요청
        }
      }}>Fullscreen</button>
    </div>
  );
};

export default VideoPlayer;
