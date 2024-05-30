"use client"; //esto esta porque me daba error
import Image from "next/image";
import styles from "./page.module.css";
import stylesPlanet from "./planetas.module.css";
import stylesStars from "./stars.module.css"
import About from "../../pages/aboutme"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SplashScreen from "../../pages/splashscreen"
export default function Home() {

  const [starsStyle, setStarsStyle] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

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
    loading ? <SplashScreen /> :
    <main className={styles.main}>
      <div className="void"> {/* honestament eno pense que dejara poner "" en el className, pero bueno*/}
            <h1 className={styles.title}>¡Bienvenido</h1>
            <h1 className={styles.title}>a mi portafolio!</h1>
            <div className={styles.imgContainer}>
            </div>
        </div>
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
      
      {/*<div className="voidClickMe">  
        <button className={styles.clickMe}>
        Click me
        
        </button>
      </div>*/}
         

            
      </div>{/* fin fe sistema solar */}
      {/* icono para redigirise */}
      <div >
      <Link href="/aboutme">
        <button className={styles.botonFlecha}>
        </button>
      </Link>
      </div>
      

      </div>
    </main>
  );
}