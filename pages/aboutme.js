"use client"; //esto esta porque me daba error
import Image from "next/image";
import styles from "../src/app/page.module.css";
import SplashScreen from "./splashscreen";
import React, { useEffect, useState } from "react";

function AboutMe() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 3000); 
    
        return () => clearTimeout(timer);
      }, []);

    return(
        <>
        {/*
        loading ? <SplashScreen /> :
         */}
        
        <div >
            hoal
        </div>
        </>

    )

}

export default AboutMe;