"use client";
import styles from "./page.module.css";
import stylesPlanet from "./planetas.module.css";
import stylesStars from "./stars.module.css"
import React, { useEffect, useState } from "react";
export default function Home() {

  const [starsStyle, setStarsStyle] = useState({});

  useEffect(() => {
    const layer = [];
    const totalStars = 200;
    for(let i = 0; i < totalStars; i++) {
      const x = Math.floor(Math.random() * 100);
      const y = Math.floor(Math.random() * 100);
      const opacity = Math.random();
      layer.push(`${x}vw ${y}vh 0 rgba(255, 255, 255, ${opacity})` ); 
    }
    setStarsStyle({
      '--space-layer': layer.join(','),
      '--size': '2px',
    });

  
  }, [])

  return (
    <main className={styles.main}>
      <div className={stylesStars.starsContainer} style= {starsStyle}></div>
      <div className={styles.center}>
      
      {/*sistema solar*/}
      <div className={styles.sistemaSolar}>
          {/*sol*/}
          <div className={styles.mercurio}></div>
          <div className={styles.solContainer}>
            <div className={styles.solTop}></div>
          </div>
          <div className={styles.solBottom}></div>
        
          <div className={styles.ContainerOrbitaPlanetas}>
            {/*orbitas*/}
            {
              Array.from({ length: 8 }).map((_, i) => (
                <div className={`${styles.orbita} ${styles[`orbita${i + 1}`]}`}></div>
              ))
            }     
            {/*planetas*/}   
            {
              Array.from({ length: 9 }).map((_, i) => (
                  <div className={`${stylesPlanet.planeta} ${stylesPlanet[`planeta${i + 1}`]}`}></div>

              ))
            }

          </div>
            
      </div>


      </div>
    </main>
  );
}