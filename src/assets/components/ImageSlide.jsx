import React from 'react';
import '../pages/stylesPc.css';

const ImageSlide = ({ imageSrc, title, description, buttonText, buttonLink }) => {
  return (
    <div className="MainBox">
      <img src={imageSrc} alt={title} />
      <div className="MainTxt">
        <h3>{title}</h3>
        <p>{description}</p>
        <a className='BtnTxt01' target="_blank"   href={buttonLink}>{buttonText}</a>
      </div>
    </div>
  );
};

export default ImageSlide;
