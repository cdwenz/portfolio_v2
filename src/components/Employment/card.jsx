import React from "react";
import styles from "./employment.module.css";

function CardEmploy() {
  return (
    <div className={styles.containCard}>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/images-cdwenz.appspot.com/o/technologies%2Femploy_ivoy.png?alt=media&token=917e97a5-f79e-4675-97ea-71f19f25e4d9"
        alt="ivoy"
        className={styles.imgCard}
      />
      <div className={styles.titleCard}>
        <h6>ivoy - tus envíos mas rápidos</h6>
      </div>
      <h6>2022 - 2023</h6>
      <ul>
        <li className={styles.liCard}>Distribución equilibrada de tareas </li>
        <li className={styles.liCard}>
          Integración de clientes a nuestra API{" "}
        </li>
        <li className={styles.liCard}>Desarrollar procesos documentados</li>
        <li className={styles.liCard}>
          Implementar estrategia de atención de incidencias y requerimientos
        </li>
        <li className={styles.liCard}>
          Seguimiento de primer contacto a incidencias y requerimientos
          realizados por usuarios finales.
        </li>
        <li className={styles.liCard}>A cargo del sistema de tickets.</li>
      </ul>
      <div className={styles.titleCard}>
        <h6>
          <b>Head of integrations & support</b>
        </h6>
      </div>
    </div>
  );
}

export default CardEmploy;
