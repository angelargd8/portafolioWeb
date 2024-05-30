import stylesSplash from "../styles/splash.module.css";
import React, { useEffect, useState } from "react";
export default function SplashScreen() {
    {/*
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
        backgroundColor: 'black' 
        }}>
        <h1>Cargando...</h1>
      </div>
    */}
    const [bubbles, setbubbles] = useState([]);

    useEffect(() => {
        const newBubbles = [];
        const totalBubbles = 100;
        for(let i = 0; i < totalBubbles; i++) {
            const size = Math.floor(Math.random() * 30);
            const x = Math.floor(Math.random() * 100);
            const y = Math.floor(Math.random() * 100);
            const z = Math.floor(Math.random() * 2000);
            const hue = Math.floor(Math.random() * 360);
            const bubble ={
                size: `${size}px`,
                transform: `translate3d(${x}px, ${y}px, ${z}px)`,
                backgroundColor: `hsl(${hue}, 70%, 50%)`,
                animationDelay: `${i * 0.2}s`,
            }
            newBubbles.push(bubble); 
        }
        setbubbles( newBubbles );
      }, [])

    return (
        <div>
        
        <div className={stylesSplash.bubbleContainer}>
            {bubbles.map((bubble, index) => (
                <div className={stylesSplash.bubble} key={index} style={bubble}></div>
            ))}
        </div>
        
        </div>
    
    

    
    )
      
    
  }