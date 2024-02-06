import React from "react";
import styles from "./contact.module.css";
import imgContact from "../../img/ben-kolde-FaPxZ88yZrw-unsplash 1.png";
import Select from "../Select/index";

function Contact() {
  return (
    <div id="CONTACT" className={styles.containContact}>
      <div className={styles.mainContact}>
        <div className={styles.sections}>
          <section>
            <img src={imgContact} alt="contactIMG" />
          </section>
          <section className={styles.form}>
            <div className={styles.subtitle}>Contact</div>
            <h3 className={styles.h3}>WRITE ME</h3>
            <input
              type="text"
              className={styles.inputText}
              placeholder="Name"
            />
            <input
              type="text"
              className={styles.inputText}
              placeholder="Email"
            />
            <Select />
            <textarea
              rows={3}
              className={styles.inputMessage}
              placeholder="Message"
            />
            <input
              type="button"
              className={styles.btnEnviar}
              value={"Send"}
            />
          </section>
        </div>
      </div>
      <div className={styles.formSmall}>
        <div className={styles.subtitle}>Contact</div>
        <h3 className={styles.h3}>WRITE ME</h3>
        <section className={styles.form}>
          <input
            type="text"
            className={styles.inputText}
            placeholder="Nombre"
          />
          <input type="text" className={styles.inputText} placeholder="Email" />
          <Select />
          <input type="button" className={styles.btnEnviar} value={"ENVIAR"} />
        </section>
      </div>
    </div>
  );
}

export default Contact;
