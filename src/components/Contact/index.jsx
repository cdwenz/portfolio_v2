import React from "react";
import styles from "./contact.module.css";
import imgContact from "../../img/ben-kolde-FaPxZ88yZrw-unsplash 1.png"
import Select from "../Select/index";

function Contact() {
  
  return <div className={styles.mainContact}>
    <section>
      <img src={imgContact} alt="contactIMG" />
    </section>
    <section className={styles.form}>
      <input type="text" className={styles.inputText} placeholder="Nombre"/>
      <input type="text" className={styles.inputText} placeholder="Email"/>
      {/* <select id="ask"  className={styles.select} >
        <option defaultValue={'Seleccione una opcion'} defaultChecked>Seleccione una opción</option>
        <option value={'Propuesta de trabajo'}>Propuesta de trabajo</option>
        <option value={'Consultas de código'}>Consultas de código</option>
        <option value={'Propuesta de trabajo'}>Propuesta de trabajo</option>
        <option value={'Propuesta de trabajo'}>Consultas de código</option>
      </select> */}
      <Select />
      <input type="button" className={styles.btnEnviar} value={'ENVIAR'}/>
    </section>
  </div>;
}

export default Contact;
