// Banner.js
import React, { useState, useEffect } from 'react';
import '../Banner/Banner.css'; 

const Banner = ({ title, showDynamicText, isHomePage }) => {
  const [isDeveloper, setIsDeveloper] = useState(true);

  useEffect(() => {
    if (showDynamicText) {
      const timer = setInterval(() => {
        setIsDeveloper(prevState => !prevState);
      }, 3000); // Cambia el texto Developer/Programador cada 3 segundos

      return () => clearInterval(timer);
    }
  }, [showDynamicText]);


  return (
    <div className={`banner ${isHomePage ? 'full-height' : 'banner-40vh'}`}>
      <div className="banner-content banner-content-mobile">
        <h1 className='nombre-title'>{title}</h1>
        {showDynamicText && (
          <h2>
            <span className="dynamic-text">{isDeveloper ? 'Developer' : 'Programador'}</span>
          </h2>
        )}
      </div>
    </div>
  );
};

export default Banner;