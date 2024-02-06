import * as React from "react";
import styles from "./education.module.css";

function Education() {
  return (
    <div className={styles.containerEdu} id="EDUCATION">
      <div className={styles.title}>
            <div className={styles.subtitle}>Education</div>
            <h3 className={styles.h3}>PREPARATION</h3>
      </div>
      <ul className={styles.ulEdu}>
        <li className={styles.liEdu}>
          <div className={styles.firstCol}>2005</div>
          <div className={styles.secondCol}>
            <span className={styles.spanLineLeft}></span>
            <span className={styles.spanSvg}>
              <img src="https://firebasestorage.googleapis.com/v0/b/images-cdwenz.appspot.com/o/technologies%2FEPET14%201.png?alt=media&token=7b60bdfd-10b5-463c-acfe-8e81a069c48b" alt="EPET14" srcset="" />
            </span>
            <span className={styles.spanLineRight}></span>
          </div>
          <div className={styles.thirtCol}>
            <span className={styles.spanHistory}>Técnico en electrónica</span>
            <p className={styles.pHistory}>EPET 14</p>
          </div>
        </li>
        <li className={styles.liEdu}>
          <div className={styles.firstCol}>2006</div>
          <div className={styles.secondCol}>
            <span className={styles.spanLineLeft}></span>
            <span className={styles.spanSvg}>
              <img src="https://firebasestorage.googleapis.com/v0/b/images-cdwenz.appspot.com/o/technologies%2FIFES%201.png?alt=media&token=b951e480-1831-4e34-91d7-118f2081ba7a" alt="IFES" srcset="" />
            </span>
            <span className={styles.spanLineRight}></span>
          </div>
          <div className={styles.thirtCol}>
            <span className={styles.spanHistory}>Reparación de PC y Redes de Datos</span>
            <p className={styles.pHistory}>ICONO - IFES</p>
          </div>
        </li>
        <li className={styles.liEdu}>
          <div className={styles.firstCol}>2021</div>
          <div className={styles.secondCol}>
            <span className={styles.spanLineLeft}></span>
            <span className={styles.spanSvg}>
              <img src="https://firebasestorage.googleapis.com/v0/b/images-cdwenz.appspot.com/o/technologies%2FHENRY1.png?alt=media&token=d4c33b10-85ed-4d24-97d2-2291d1fc938b" alt="SOYHENRY" srcset="" />
            </span>
            <span className={styles.spanLineRight}></span>
          </div>
          <div className={styles.thirtCol}>
            <span className={styles.spanHistory}>Desarrollador Web Fullstack</span>
            <p className={styles.pHistory}>SoyHenry Bootcamp</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Education;
