import React from 'react'
import  styles  from "./home.module.css";
import img from "../../img/img_main.png";
import Textra from 'react-textra';

function Home() {
  return (
    <div className={styles.container} id='HOME'>
        <div className={styles.text}>
        <h4>
          <Textra 
          effect='leftRight'
            duration={300}
            data={['Frontend', 'Backend', 'Fullstack']}
          />
          </h4>
          <h1>Developer</h1>
        </div>
        <div className={styles.img}>
          <img src={img} alt="img" />
        </div>
    </div>
  )
}

export default Home