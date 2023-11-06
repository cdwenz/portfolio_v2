import React from "react";
import styles from "./employment.module.css";

function CardEmploy(employ) {
  const employed = employ.employ;
  return (
    <div className={styles.containCard} key={employed.date}>
      <div className={styles.headCard}></div>
      <div className={styles.divideCard}>
        <div>
          <img src={employed.img} alt="ivoy" className={styles.imgCard} />
          <div className={styles.titleCard}>
            <h6>
              <i>{employed.title}</i>
            </h6>
          </div>
          <small>{employed.date}</small>
          <ul>
            {employed.details.map((item, index) => {
              return (
                <li className={styles.liCard} key={index}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.footerCard}>
          <h6>
            <b>{employed.position}</b>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default CardEmploy;
