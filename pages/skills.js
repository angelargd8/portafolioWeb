import React, { useEffect, useState } from "react";
import '../src/app/globals.css'
import styles from "../styles/skills.module.css"
import Image from "next/image";


function Skills(){
    const [starsStyle, setStarsStyle] = useState({});
    useEffect(() => {
        const layer = [];
        const totalStars = 400;
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
        <div className={styles.abs}  id="skills">
        <div className={styles.starsContainer} style= {starsStyle}></div>
            <div className={styles.Container}>
            <h1 className={styles.title}>Tecnologías</h1>

                
                <div className={styles.ContainerInfo}>
                    <div className={styles.grid}>
                    <a className={styles.card} >
                        <h1>
                        Backend 
                        </h1>
                        <div className={styles.gridImg}>
                            <div className={styles.imagenb1}></div>
                            <div className={styles.imagenb2}></div>
                            <div className={styles.imagenb3}></div>
                            <div className={styles.imagenb4}></div>
                            <div className={styles.imagenb5}></div>
                        </div>
                        
                    </a>
                    <a className={styles.card} >
                        
                        <h1>
                        Base de datos
                        </h1>
                        <div className={styles.gridImg}>
                            <div className={styles.imagendb1}></div>
                            <div className={styles.imagendb2}></div>
                            <div className={styles.imagendb3}></div>
                            <div className={styles.imagendb4}></div>
                            <div className={styles.imagendb5}></div>
                        </div>
                        
                    </a>
                    <a className={styles.card} >
                        <h1>
                        Frontend 
                        </h1>
                        <div className={styles.gridImg}>
                            <div className={styles.imagenf1}></div>
                            <div className={styles.imagenf2}></div>
                            <div className={styles.imagenf3}></div>
                            <div className={styles.imagenf4}></div>
                            <div className={styles.imagenf5}></div>
                            <div className={styles.imagenf6}></div>
                        </div>
                        
                    </a>

                    
                    </div>
                </div>
                
                
                        
                
            </div>
        </div>
        </>
    )
}

export default Skills;