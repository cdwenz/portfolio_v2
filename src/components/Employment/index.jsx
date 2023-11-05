import React from "react";
import styles from "./employment.module.css";
import CardEmploy from "./card";
import employments from "./employ.json";

function Employment() {
  const employes = employments.employments;
  return (
    <div className={styles.containerEmploy} id="EMPLOYMENT">
      <div className={styles.titleEmploy}>
        <div className={styles.subtitle}>Experience</div>
        <h3 className={styles.h3}>EMPLOYMENT</h3>
      </div>
      <div className={styles.cardMap}>
        {employes.map((item, index) => {
          return <CardEmploy employ={item} />;
        })}
      </div>
    </div>
  );
}

export default Employment;
