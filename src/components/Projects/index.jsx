import React from 'react';
import img from '../../img/img_main.png';
import styles from './project.module.css'

function Project() {
  return (
    <div className={styles.container}>
        <img src={img} alt="image" className={styles.imgProject}/>
        <span className={styles.spanText1}>texto 1</span>
        <span className={styles.spanText2}>texto 2</span>
    </div>
  )
}

export default Project