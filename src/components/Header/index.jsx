import React from 'react';
import styles from './header.module.css';
import { IconContext } from "react-icons";
import { MdLocationOn, MdWhatsapp } from 'react-icons/md';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'


function Header() {
  return (
    <div className={styles.container}>
        
        <IconContext.Provider value={{ style: {fontSize: "14px", alignSelf:"center"} }}>
            <div className={styles.logoContainer}>
                <span>CRISTIAN &nbsp;</span>
                <span className={styles.primary}>WENZ.</span>
            </div>
            <div className={styles.location}>
                <MdLocationOn />
                <span>&nbsp;Patagonia, Argentina</span>
            </div>
            <div className={styles.phone}>
                <MdWhatsapp /><span>&nbsp;(+54) 299-5278978</span>
            </div>
            <div className={styles.social}>
                <span>Social Media</span>
                <AiFillLinkedin />
                <FaXTwitter />
                <FaGithub />
            </div>
        </IconContext.Provider>
    </div>
  )
}

export default Header