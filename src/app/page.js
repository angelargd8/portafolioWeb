import styles from "./page.module.css";

export default function Home() {

  /*let orbitas = [];
  for (let i = 0; i <=7; i++) {
    orbitas.push(
      <div key={i} className={ `orbita${i}`}>
      </div>
    );
    console.log(i);
    console.log(orbitas);
  }*/

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        
        <div className={styles.sol}>
        </div>
        <div className={styles.orbita}>
        </div>

        
        

      </div>
    </main>
  );
}