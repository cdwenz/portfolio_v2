import React from 'react';
import styles from './about.module.css';
import img from '../../img/cdwenz.png'

function About() {
  return (
    <div className={styles.container} id='ABOUT'>
        <div className={styles.left}>
            <div className={styles.subtitle}>About me</div>
            <h3 className={styles.h3}>THIS IS THE WAY</h3>
            <div>Soy un apasionado de la tecnología y de su aplicación para superar desafíos ayudando a otras personas a simplificar su vida. Es por eso que uniendo mis bases en electrónica, experiencia en redes y helpdesk, sumado al mundo de la programación, hacen de mi trabajo, un placer. Soy observador, con gran capacidad de resolución de problemas y siempre dispuesto a aprender. Con experiencia en trabajo en equipo, liderando y acompañando.</div>
            <input type='button' className={styles.btnResume} value='Download Resume' />
        </div>
        <div className={styles.right}> 
            <img src={img} alt='img' />
        </div>
    </div>
  )
}

export default About