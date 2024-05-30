"use client"; //esto esta porque me daba error
import '../src/app/globals.css'
import Image from "next/image";
import styles from "../styles/aboutme.module.css";
import SplashScreen from "./splashscreen";
import React, { useEffect, useState } from "react";
import stylesStars from "../src/app/stars.module.css"
import imagen1 from "../public/assets/a2.png"
import angleUp from "../public/assets/up.png"
import Link from "next/link";
import stylesLenguajes from "../styles/lenguajes.module.css"


function AboutMe() {
    const [loading, setLoading] = useState(true);
    const [starsStyle, setStarsStyle] = useState({});
    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 1000); 
    
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

    return(
        
        //loading ? <SplashScreen /> :
         
        <main className={styles.main}>
        <div className={stylesStars.starsContainer} style= {starsStyle}></div>

          <div className={styles.description}>
            {/* imagen para volver a home*/}
            <div >
            <Link href="/">
              <button className={styles.botonFlecha}>
              </button>
            </Link>
            

            </div>
            
          </div>

          <div className={styles.center}>
          <div className={styles.MainInfo}>
            <div className="void">
                <h1 className={styles.title} >¡Hola! Soy</h1>
                <h1 className={styles.title}>Angela Garcia</h1>
                <h3 className={styles.subtitle}>Estudiante de CS</h3>
              </div>
              <div className={styles.imgContainer}>
                <Image
                    src= {imagen1}
                    alt="Picture of the author"
                    width={200}
                    height={200}
                  />
                  {/*lenguajes*/}   
                {
                  /*<div className={`${stylesLenguajes.lenguaje}` }></div>*/
                  Array.from({ length: 9 }).map((_, i) => (
                      <div className={`${stylesLenguajes.lenguaje} ${stylesLenguajes[`lenguaje${i + 1}`]}`}></div>

                  ))
                }
              </div>


          </div>
            
          
          </div>

          <div className={styles.grid}>
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Docs <span>-&gt;</span>
              </h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Learn <span>-&gt;</span>
              </h2>
              <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
            </a>

            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Templates <span>-&gt;</span>
              </h2>
              <p>Explore starter templates for Next.js.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Deploy <span>-&gt;</span>
              </h2>
              <p>
                Instantly deploy your Next.js site to a shareable URL with Vercel.
              </p>
            </a>
          </div>
        </main>
        

    )

}

export default AboutMe;