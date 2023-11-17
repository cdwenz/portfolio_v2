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
            <span className={styles.spanLine}></span>
            <span className={styles.spanSvg}>
              <img src="https://firebasestorage.googleapis.com/v0/b/images-cdwenz.appspot.com/o/technologies%2FEPET14%201.png?alt=media&token=7b60bdfd-10b5-463c-acfe-8e81a069c48b" alt="EPET14" srcset="" />
            </span>
            <span className={styles.spanLine}></span>
          </div>
          <div className={styles.thirtCol}>
            <span className={styles.spanHistory}>Técnico en electrónica</span>
            <p className={styles.pHistory}>EPET 14</p>
          </div>
        </li>
        <li className={styles.liEdu}>
          <div className={styles.firstCol}>2006</div>
          <div className={styles.secondCol}>
            <span className={styles.spanLine}></span>
            <span className={styles.spanSvg}>
              <img src="https://firebasestorage.googleapis.com/v0/b/images-cdwenz.appspot.com/o/technologies%2FIFES%201.png?alt=media&token=b951e480-1831-4e34-91d7-118f2081ba7a" alt="IFES" srcset="" />
            </span>
            <span className={styles.spanLine}></span>
          </div>
          <div className={styles.thirtCol}>
            <span className={styles.spanHistory}>Reparación de PC y Redes de Datos</span>
            <p className={styles.pHistory}>ICONO - IFES</p>
          </div>
        </li>
        <li className={styles.liEdu}>
          <div className={styles.firstCol}>2021</div>
          <div className={styles.secondCol}>
            <span className={styles.spanLine}></span>
            <span className={styles.spanSvg}>
              <img src="https://firebasestorage.googleapis.com/v0/b/images-cdwenz.appspot.com/o/technologies%2FHENRY1.png?alt=media&token=d4c33b10-85ed-4d24-97d2-2291d1fc938b" alt="SOYHENRY" srcset="" />
            </span>
            <span className={styles.spanLine}></span>
          </div>
          <div className={styles.thirtCol}>
            <span className={styles.spanHistory}>Desarrollador Web Fullstack</span>
            <p className={styles.pHistory}>SoyHenry Bootcamp</p>
          </div>
        </li>
        {/* <li className={styles.liEdu}>
          <div className={styles.firstCol}>2005</div>
          <div className={styles.secondCol}>
            <span className={styles.spanLine}></span>
            <span className={styles.spanSvg}>
              <svg
                className={styles.svg}
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="FastfoodIcon"
              >
                <path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-8-15.03-8-15.03 0h15.03zM1.02 17h15v2h-15z"></path>
              </svg>
            </span>
            <span className={styles.spanLine}></span>
          </div>
          <div className={styles.thirtCol}>
            <span className={styles.spanHistory}>Técnico en electrónica</span>
            <p className={styles.pHistory}>EPET 14</p>
          </div>
        </li> */}
      </ul>
    </div>
  );
}

export default Education;
