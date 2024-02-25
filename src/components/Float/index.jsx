import React, { useEffect, useState } from "react";
import styles from "./float.module.css";

const items = [
  "HOME",
  "ABOUT",
  "PROYECTS",
  "SKILLS",
  "EMPLOYMENT",
  "EDUCATION",
  "CONTACT",
];

function Float() {
  const [isMenu, setIsMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      scrollY > 300  ? setScroll(true) : setScroll(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.floating_button}>
        <ol
          className={styles.listItems}
          style={{ display: `${isMenu ? "block" : "none"}` }}
        >
          {items.map((item, index) => {
            return (
              <li className={styles.liFloat} key={index}>
                <a
                    key={index}
                    href={`#${item}`}
                    className={styles.linkTo}
                    onClick={() => setIsMenu(!isMenu)}
                  >{item}</a>
                
              </li>
            );
          })}
        </ol>
        <div
          className={styles.floating_button_top}
          style={{ visibility: scroll ? "visible" : "hidden" }}
        >
          <img
            src="https://img.icons8.com/ios/50/menu--v1.png"
            alt="collapse-arrow--v2"
            className={styles.imgTop}
            onClick={() => setIsMenu(!isMenu)}
          />
        </div>
      </div>
    </>
  );
}

export default Float;
