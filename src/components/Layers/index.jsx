import React from 'react';
import { layers } from '../../img/imgs';
import styles from './layers.module.css'

// const layers = [
//     {
//         name: 'Frontend',
//         description: 'Layout and funcionality with  ReactJS & related frameworks',
//         img: imgs.imgFront
//     },
//     {
//         name: 'Backend',
//         description: 'Design and development of RestApi servers and API graphQL servers based NodeJS - MongoDB - Express',
//         img: imgs.imgBack
//     },
//     {
//         name: 'Design',
//         description: 'Interface design with Figma Inc. ',
//         img: imgs.imgDesign
//     },
//     {
//         name: 'Mobile ',
//         description: 'Mobile Apps with Flutter / Dart and React Native / Javascript',
//         img: imgs.imgFront
//     }
// ]

function Layer() {
  return (
    <div className={styles.container}>
        {
            layers.map((layer) => {
                return (
                <div className={styles.card}>
                    <div className={styles.imgs}>
                        <div className={styles.elipse}>
                            <img src={layer.img} alt='img' />
                        </div>
                    </div>
                    <div className={styles.name}>
                        {layer.name}
                    </div>
                    <div className={styles.description}>
                        {layer.description}
                    </div>
                </div>)
            })
        }
        
    </div>
  )
}

export default Layer