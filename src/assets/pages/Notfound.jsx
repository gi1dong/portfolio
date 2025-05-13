import React from 'react';
import { Link } from 'react-router-dom';
import  './stylesPc.css';

const Notfound = () => {
  return (
  <div className='Notfound'>
      <h2>
      잘못된 페이지입니다.
      </h2>
      <h2>The page you are looking for can’t be found.</h2>
      <Link to="/" className="HomeAct">
          홈으로 돌아가기
      </Link>
    </div>
    )

};
export default Notfound;