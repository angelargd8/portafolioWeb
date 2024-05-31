import React, { useEffect, useState } from "react";
import '../src/app/globals.css'
import styles from "../styles/projects.module.css"
import Image from "next/image";


function Contact(){
    const [starsStyle, setStarsStyle] = useState({});
    useEffect(() => {
        const layer = [];
        const totalStars = 700;
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
        <div className={styles.abs}  id="contact">
        <div className={styles.starsContainer} style= {starsStyle}></div>
            <div className={styles.Container}>
            <h1 className={styles.title}>Contactame en:</h1>
              
            </div>
        </div>
        </>
    )
}

export default Contact;