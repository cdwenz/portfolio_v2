import React from 'react';
import img from '../../img/img_main.png';
import img8 from '../../img/8.jpg';
import img9 from '../../img/9.jpg';

import styles from './project.module.css'

const projects = [
  {
  title: 'titulo',
  subtitle: 'subtitle',
  description: 'descripción',
  img: img
  },
  {
  title: 'titulo2',
  subtitle: 'subtitle2',
  description: 'descripción2',
  img: img
  },
  {
  title: 'titulo3',
  subtitle: 'subtitle3',
  description: 'descripción3',
  img: img
  },
  {
  title: 'titulo3',
  subtitle: 'subtitle3',
  description: 'descripción3',
  img: img
  }
]

function Project() {
  return (
        <div className={styles.container}>
        {/* <div className={styles.wrapper}> */}
          {/* <div className={styles.item}>box-1</div>
          <div className={styles.item}>box-2</div>
          <div className={styles.item}>box-3</div>
          <div className={styles.item}>box-4</div>
          <div className={styles.item}>box-5</div>
          <div className={styles.item}>box-6</div> */}
          <div className={styles.grid}>
            {projects.map((element, index)=>{
              return (
                    <figure className={styles.effect_ming}  id={element.index}>
                      <img src={img9} alt="img09"/>
                      <figcaption>
                        <h2>{element.title} <span>{element.subtitle}</span></h2>
                        <p>{element.description}</p>
                        <a href="#">View more</a>
                      </figcaption>			
                    </figure>
              )
            })}
          </div>
        </div>
  )
}

export default Project