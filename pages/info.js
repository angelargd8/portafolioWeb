import styles from "../styles/info.module.css"
import imagen1 from "../public/assets/a6.jpg"
import Image from "next/image";
import stylesStars from "../styles/stars4objects.module.css"
import React, { useEffect, useState } from "react";

function Info(){
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
            <div className={styles.abs}  id="aboutme">
                <div className={styles.starsContainer} style= {starsStyle}></div>
                <div className={styles.Container}>
                
                    <div className={styles.ContainerImage}>
                        <Image
                            src= {imagen1}
                            alt="Picture of the author"
                            width={400}
                            height={400}
                        />
                    </div>
                    <div className={styles.ContainerInfo}>
                        <h1 className={styles.title}>Acerca de mi</h1>
                        <p className={styles.subtitle}>
                            Hola soy una estudiante de tercer año en la carrera de 
                            ciencias de la computación en la UVG. En este portafolio 
                            se puede encontrar mis recientes proyectos e información
                            de contacto.
                            Acerca de mis hobbies, me gusta escribir poesía, escuchar
                            música y aprender nuevas cosas.

                        </p>
                    </div>
                </div>
        </div>
        
        </>
    )
}

export default Info;