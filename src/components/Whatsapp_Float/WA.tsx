"use client";

import React, { useEffect, useState } from "react";
import icon from "@/assets/icons8-whatsapp.svg";
import styles from "./wa.module.css";
import Image from "next/image";

function WA() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      scrollY > 300 ? setScroll(false) : setScroll(true);
    };

    globalThis.window.addEventListener("scroll", handleScroll);

    return () => {
        globalThis.window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.floating_button}>
      <div className={styles.floating_button_top} style={{visibility: scroll ? 'hidden' : 'inherit'}}>
        <img
          src="https://img.icons8.com/ios/50/collapse-arrow--v2.png"
          alt="collapse-arrow--v2"
          className={styles.imgTop}
          onClick={() => window.scrollTo(0, 0)}
        />
      </div>

      <a href="https://wa.me/542995974319" target="_blank" rel="noreferrer">
        <Image src={icon} alt="WhatsApp" width={60} height={60} className={styles.imgWA}/>
      </a>
    </div>
  );
}

export default WA;
