import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import styles from "./navbar.module.css";
import imgLogo from "../../img/865a8cf8791ce4652dc34409cf75393c-removebg-preview.png";

const items = [
  "HOME",
  "ABOUT",
  "PROYECTS",
  "SKILLS",
  "EMPLOYMENT",
  "EDUCATION",
  "CONTACT",
];

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const mobileMenu = async () => {
    document.getElementById("mobileMenu").style.left === "0px"
      ? (document.getElementById("mobileMenu").style.left = "-115%")
      : (document.getElementById("mobileMenu").style.left = "0px");
    await setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <div className={styles.logoContainer}>
            <img src={imgLogo} alt="logo" style={{ height: "70px" }} />
            <span className={styles.name}>Cristian&nbsp;</span>
            {/* &nbsp; */}
            <span className={styles.primary}>Wenz</span>.
          </div>
          {/* <div className={styles.mobileIcon} onClick={() => mobileMenu()}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </div> */}
          <ul id="mobileMenu" className={styles.ulNavbar}>
            {items.map((item, index) => {
              return (
                <li className={styles.liNavbar}>
                  <a
                    key={index}
                    href={`#${item}`}
                    className={styles.linkTo}
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                  >
                    <div className={styles.div}>{item}</div>
                  </a>
                </li>
              );
            })}
          </ul>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Navbar;
