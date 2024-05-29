import styles from "./page.module.css";

export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        
      {/*sistema solar*/}
      <div className={styles.sistemaSolar}>
        {/*sol*/}
        <div className={styles.mercurio}></div>
        <div className={styles.solContainer}>
          <div className={styles.solTop}></div>
        </div>
        <div className={styles.solBottom}></div>
        
          {/*orbitas*/}
          {
            Array.from({ length: 8 }).map((_, i) => (
              <div className={`${styles.orbita} ${styles[`orbita${i + 1}`]}`}>
                {/*planetas*/}
                <div className={`${styles.planeta} ${styles[`planeta${i + 1}`]}`}></div>
              </div>
              
            ))
          }
        
      </div>
        
        

      </div>
    </main>
  );
}