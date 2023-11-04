import React from "react";
import styles from "./employment.module.css";
import CardEmploy from "./card";

function Employment() {
  return (
    <div className={styles.containerEmploy}>
      <div className={styles.titleEmploy}>
        <div className={styles.subtitle}>Experience</div>
        <h3 className={styles.h3}>EMPLOYMENT</h3>
      </div>
      <CardEmploy />
    </div>
  );
}

export default Employment;
