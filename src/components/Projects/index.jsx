import React from 'react';
import img from '../../img/img_main.png';
import img8 from '../../img/8.jpg';
import img9 from '../../img/9.jpg';

import styles from './project.module.css'

const projects = [
  {
  title: `Samuel D'ippolito`,
  subtitle: 'Artista plástico',
  description: 'Web de concepto',
  img: "https://firebasestorage.googleapis.com/v0/b/images-cdwenz.appspot.com/o/SamDip%2Fexposiciones%2Fflores%2Fprincipios_de_conexion%2FLa%20Flor%20(El%20Abrazo)_1vert.jpg?alt=media&token=6ee6087e-5684-449c-a0b7-4371ae519c02",
  url: "https://www.samueldippolito.com"
},
  {
  title: 'Lanin CarWash',
  subtitle: 'Lavadero',
  description: 'Turnos web',
  img: "https://firebasestorage.googleapis.com/v0/b/images-cdwenz.appspot.com/o/Portfolio%2Flanincarwash_org.png?alt=media&token=f5fa4ea0-2c45-4ef3-bba6-61c06207dbe4",
  url: "https://www.lanincarwash.com"
  },
  {
  title: 'Tierra prometida',
  subtitle: 'Almacén natural',
  description: 'ecommerce',
  img: "https://firebasestorage.googleapis.com/v0/b/images-cdwenz.appspot.com/o/Portfolio%2Ftierraprometida.png?alt=media&token=0ed80145-1b81-4259-9f8f-1d76ad1bd242",
  url: "https://ecommerce-eight-self.vercel.app/"
  },
  {
  title: 'Naciones Unidas',
  subtitle: 'Corralón',
  description: 'ecommerce',
  img: "https://firebasestorage.googleapis.com/v0/b/images-cdwenz.appspot.com/o/Portfolio%2Fcnu.png?alt=media&token=bd5f3b5e-6835-4a99-aecb-0c610de0796d",
  url: ""
  },
  {
  title: 'Landing Page',
  subtitle: 'Neón',
  description: 'css effects',
  img: "https://firebasestorage.googleapis.com/v0/b/images-cdwenz.appspot.com/o/Portfolio%2Fneonlight.png?alt=media&token=b7ad0bc4-a04e-4b7c-830c-638b213df3fa",
  url: "https://tradicional-house.vercel.app/"
  }
]

function Project() {
  return (
        <div className={styles.container} id='PROYECTS'>
          <div className={styles.grid}>
            {projects.map((element, index)=>{
              return (
                    <figure key={index} className={styles.effect_ming}  id={element.index}>
                      <img src={element.img} alt="img09"/>
                      <figcaption>
                        <h2>{element.title}</h2>
                        <span>{element.subtitle}</span>
                        <p>{element.description}</p>
                        {element.url ? <a href={element.url} target='_blank'>View more</a> : null}
                      </figcaption>			
                    </figure>
              )
            })}
          </div>
        </div>
  )
}

export default Project