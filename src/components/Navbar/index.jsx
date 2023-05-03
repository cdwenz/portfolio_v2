import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import styles from './navbar.module.css'

const items = ['HOME', 'ABOUT', 'PROYECTS', 'SKILLS', 'EMPLOYMENT', 'EDUCATION', 'CONTACT']

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  const mobileMenu = async () => {
    document.getElementById("mobileMenu").style.left === "0px" 
    ? document.getElementById("mobileMenu").style.left = "-115%"
    : document.getElementById("mobileMenu").style.left = "0px"
    await setShowMobileMenu(!showMobileMenu)
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <div className={styles.logoContainer}>
            <span>CRISTIAN &nbsp;</span>
            <span className={styles.primary}>WENZ.</span>
          </div>
          <div className={styles.mobileIcon} onClick={() => mobileMenu()}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </div>
          <ul id="mobileMenu">
            <li>
              {items.map((item, index) => {
                return (
                  <a key={index} href={`#${item}`} className={styles.linkTo} onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    <div className={styles.div}>
                      {item}
                    </div>
                  </a>
                )
              })}
            </li>
          </ul>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Navbar;
