import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Image01 from './image01.png'
import Image02 from './image02.png'

function Page() {
  const navigate = useNavigate();

  useEffect(() => {
    import('../Page2/page');

    const naviTimeout = setTimeout(() => {
      navigate('/page2');
    }, 5000);

    return () => {
      clearTimeout(naviTimeout);
    };
  });

  return (
    <div>
      <div className={`overlay fade-In-Out`} />
      <div className={`page1-container`}>
        <img src={Image01} alt="Image 01" className="image01" />
        <img src={Image02} alt="Image 02" className="image02" />
        <div>Web Base Prototype</div>
      </div>
    </div>
  );
}

export default Page;
