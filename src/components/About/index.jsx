import React from 'react';
import styles from './about.module.css';
import img from '../../img/cdwenz.png'

function About() {
  return (
    <div className={styles.container} id='ABOUT'>
        <div className={styles.left}>
            <div className={styles.subtitle}>About me</div>
            <h3 className={styles.h3}>THIS IS THE WAY</h3>
            <div>I am passionate about technology and its application to overcome challenges helping other people to simplify their lives. That's why joining my background in electronics, networking and helpdesk experience, added to the world of programming, make my job a pleasure. I am observant, with great problem solving skills and always willing to learn. With experience in teamwork, leading and accompanying.</div>
            {/* <div>Soy un apasionado de la tecnología y de su aplicación para superar desafíos ayudando a otras personas a simplificar su vida. Es por eso que uniendo mis bases en electrónica, experiencia en redes y helpdesk, sumado al mundo de la programación, hacen de mi trabajo, un placer. Soy observador, con gran capacidad de resolución de problemas y siempre dispuesto a aprender. Con experiencia en trabajo en equipo, liderando y acompañando.</div> */}
            {/* <input type='button' className={styles.btnResume} value='Contact me'></input> */}
            <button className={styles.btnResume}><a
                    href={`#CONTACT`}
                  >
                    Contact me
                  </a></button>
        </div>
        <div className={styles.right}> 
            <img src={img} alt='img' />
        </div>
    </div>
  )
}

export default About