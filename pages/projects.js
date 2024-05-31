import React, { useEffect, useState } from "react";
import '../src/app/globals.css'
import styles from "../styles/projects.module.css"
import Image from "next/image";


function Projects(){
    const [starsStyle, setStarsStyle] = useState({});
    useEffect(() => {
        const layer = [];
        const totalStars = 300;
        for(let i = 0; i < totalStars; i++) {
          const x = Math.floor(Math.random() * 100);
          const y = Math.floor(Math.random() * 100);
          const r = Math.floor(Math.random() * 255);
          const g = Math.floor(Math.random() * 255);
          const b = Math.floor(Math.random() * 255);
          const opacity = Math.random();
          layer.push(`${x}vw ${y}vh 0 rgba(${r}, ${g}, ${b}, ${opacity})` );
        }
        setStarsStyle({
          '--space-layer': layer.join(','),
          '--size': '2px',
          
        });
      }, [])
    return(
        <>
        <div className={styles.abs}  id="projects">
        <div className={styles.starsContainer} style= {starsStyle}></div>
            <div className={styles.Container}>
            <h1 className={styles.title}>Conoce mis proyectos más recientes</h1>

                {/*
                <div className={styles.ContainerInfo}>
                    <div className={styles.grid}>
                    <a href="http://uwu-guate.site:3412/" target="_blank" rel="noopener noreferrer">
                        <button className={styles.card}>
                            <h2>
                            CSS Animation <span>-&gt;</span>
                            </h2>
                        </button>
                    </a>
                    </div>
                </div>
                */}
                
                        
                
            </div>
        </div>
        </>
    )
}

export default Projects;