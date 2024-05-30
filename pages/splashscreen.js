import stylesSplash from "../styles/splash.module.css";
import React, { useEffect, useState } from "react";
export default function SplashScreen() {
    
    const [starsStyle, setStarsStyle] = useState({});

      useEffect(() => {
        const layer = [];
        const totalStars = 700;
        for(let i = 0; i < totalStars; i++) {
          const x = Math.floor(Math.random() * 100);
          const y = Math.floor(Math.random() * 100);
          const hue = Math.floor(Math.random() * 360);
          const r = Math.floor(Math.random() * 255);
          const g = Math.floor(Math.random() * 255);
          const b = Math.floor(Math.random() * 255);
          const opacity = Math.random();
          layer.push(`${x}vw ${y}vh 0 rgba(${r}, ${g}, ${b}, ${opacity})` );
        }
        setStarsStyle({
          '--space-layer': layer.join(','),
          '--size': '3px',
          
        });
    
      
      }, [])
    

    return (
        <div>
        
        <div className={stylesSplash.bubbleContainer}>
        {<div className={stylesSplash.starsContainer} style= {starsStyle}></div>
           }
          
        {/*<div className={stylesSplash.starsContainer} style={{...starsStyle, '--space-layer': starsStyle['--space-layer'], '--size': starsStyle['--size']}}></div>
        */}
        </div>

        <div 
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          backgroundColor: 'black',
          color: 'white '
        }}>
        <h1>Cargando...</h1>
      </div>
        
        </div>
    
    

    
    )
      
    
  }