import React from 'react';
import '../pages/stylesPc.css';

const ListSlide = ({ items }) => {
  return (
    <div className="PageReact">
      <ul className='MainTxt'>
        {items.map((item, idx) => (
          <li  key={idx}>
            <h3 >{item.title}</h3>
            <div className="BtnWrap">
            <a className='BtnWork'  target="_blank"  href={item.buttonLink}>{item.buttonText}</a>
            <a className='BtnHandwriting'  target="_blank"  href={item.descriptionLink}>{item.descriptionText}</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListSlide;
