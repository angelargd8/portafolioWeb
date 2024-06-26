"use client"; 
import '../src/app/globals.css'
import Image from "next/image";
import styles from "../styles/aboutme.module.css";
import SplashScreen from "./splashscreen";
import React, { useEffect, useState } from "react";
import stylesStars from "../src/app/stars.module.css"
import imagen1 from "../public/assets/a2.png"
import Link from "next/link";
import stylesLenguajes from "../styles/lenguajes.module.css"
import Info from "./info"
import Projects from "./projects"
import Skills from "./skills"
import Contact from "./contact"
import linkedin from "../public/assets/linkedin.png"
import github from "../public/assets/github.png"
import img1 from "../public/assets/1.png"
import img2 from "../public/assets/2.png"
import img3 from "../public/assets/3.png"
import img4 from "../public/assets/4.png"
import img5 from "../public/assets/5.png"





function AboutMe() {
    const [loading, setLoading] = useState(true);
    const [starsStyle, setStarsStyle] = useState({});
    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 100); 
    
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
        
        loading ? <SplashScreen /> :
         
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
                  Array.from({ length: 9 }).map((_, i) => (
                      <div className={`${stylesLenguajes.lenguaje} ${stylesLenguajes[`lenguaje${i + 1}`]}`}></div>

                  ))
                }
              </div>


          </div>
            
          
          </div>

          <div className={styles.grid}>
            
            <a
              href="#aboutme"
              className={styles.card}
            >
              <h2>
                About me <span>-&gt;</span>
              </h2>
              
            </a>

            <a
              href="#projects"
              className={styles.card}
            >
              <h2>
                Projects <span>-&gt;</span>
              </h2>
              
            </a>

            <a
              href="#skills"
              className={styles.card}

            >
              <h2>
                Skills <span>-&gt;</span>
              </h2>
              
            </a>

            <a
              href="#contact"
              className={styles.card}
            >
              <h2>
                Contact <span>-&gt;</span>
              </h2>
              
            </a>
          </div>
          <div id="#aboutme">
            <Info/>
          </div>
          <div id="#projects">
          <Projects/>
          
          
          
            <div className={styles.ContainerInfo}>
                <div className={styles.grid2}>
                  
                  <a href="http://3.13.174.55/lab3_html/22869/index.html" target="_blank" rel="noopener noreferrer">
                      <button className={styles.card}>
                          <h2>
                          HTML game
                          </h2>
                          <p>
                            juego interactivo en HTML
                          </p>
                          <Image
                            src= {img2}
                            alt="img"
                            width={200}
                            height={100}
                          />
                      </button>
                  </a>
                  
                  <a href="https://labb8.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <button className={styles.card}>
                          <h2>
                          calculadora
                          </h2>
                          <p>
                            calculadora con tests
                            - vitest
                            - jsdom
                          </p>
                          <Image
                            src= {img3}
                            alt="img"
                            width={200}
                            height={100}
                          />
                      </button>
                  </a>
                  <a href="http://uwu-guate.site:3200/" target="_blank" rel="noopener noreferrer">
                      <button className={styles.card}>
                          <h2>
                          blog
                          </h2>
                          <p>
                            proyecto usando vite+react
                          </p>
                          <Image
                            src= {img4}
                            alt="img"
                            width={200}
                            height={100}
                          />
                      </button>
                  </a>
                  <a href="http://uwu-guate.site:3512/" target="_blank" rel="noopener noreferrer">
                      <button className={styles.card}>
                          <h2>
                          chat en vivo
                          </h2>
                          <p>
                            chat en vivo con comunicacion
                            a una api
                          </p>
                          <Image
                            src= {img5}
                            alt="css animation"
                            width={200}
                            height={100}
                          />
                      </button>
                  </a>
                  
                  <a href="http://uwu-guate.site:3412/" target="_blank" rel="noopener noreferrer">
                      <button className={styles.card}>
                          <h2>
                          CSS Animation 
                          </h2>
                          <p>
                            Laboratorio only css
                            animated y con solo un div
                          </p>
                          <Image
                            src= {img1}
                            alt="css animation"
                            width={200}
                            height={100}
                          />
                      </button>
                  </a>
                  
                  
                </div>
            </div>

          </div>
          <div id="#skills">
            <Skills/>
          </div>
          <div id="#contact">
            <Contact/>
            <div className={styles.ContenedorContactos}>
              <div className={styles.ImagenContacto}>
                <a href="https://www.linkedin.com/in/angela-garcia-1880a41b8/" target="_blank" rel="noopener noreferrer">
                  <Image
                      src= {linkedin}
                      alt="linkedin"
                      width={100}
                      height={100}
                    />
                </a>
              </div>
              <div className={styles.ImagenContacto}>
                <a href="https://github.com/angelargd8" target="_blank" rel="noopener noreferrer">
                  <Image
                    src= {github}
                    alt="github"
                    width={100}
                    height={100}
                  />
                </a>
              </div>
              
            </div>
            <div className={styles.espacio}></div>

          </div>
          
        </main>
        
        

    )

}

export default AboutMe;