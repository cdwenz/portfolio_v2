import React, { useEffect, useState } from "react";
import styles from "./float.module.css";

function Float() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      scrollY > 300 ? setScroll(false) : setScroll(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.floating_button}>
      <div className={styles.floating_button_top} style={{visibility: scroll ? 'hidden' : 'inherit'}}>
        <img
          src="https://img.icons8.com/ios/50/menu--v1.png"
          alt="collapse-arrow--v2"
          className={styles.imgTop}
          onClick={() => window.scrollTo(0, 0)}
        />
      </div>
    </div>
  );
}

export default Float;
