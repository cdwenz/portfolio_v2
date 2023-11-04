import React, { useState } from "react";
import styles from "./select.module.css";

const initialAsks = [
  "Propuesta de trabajo",
  "Consultas de código",
  "asdasd de código",
  "Consultas de asd",
]

function Select() {
  const [isActive, setIsActive] = useState(false);
  const [validation, setValidation] = useState(false);
  const [ask, setAsk] = useState("Seleccione una opción");
  const [asks, setAsks] = useState(initialAsks);

  const handleChange = (e) => {
    const text = e.target.value.toUpperCase();
    setAsks(text);
    setIsActive(true);
    
  };

  return (
    <div
      className={`${styles.DROPDOWN} ${isActive ? styles.ACTIVE : ""}`}
      onClick={() => setIsActive(!isActive)}
    >
      <input
        type="text"
        name="model"
        id="text"
        className={styles.TEXTBOX}
        placeholder="MODELO"
        value={ask}
        onChange={(e) => handleChange(e)}
        onBlur={() => setTimeout(() => setIsActive(false), 100)}
        // style={{ borderColor: `${validation ? "red" : "gray"}` }}
      />
      <div className={styles.OPTION}>
          {asks.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setAsk(item);
                setValidation(false);
              }}
            >
              {item}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Select;
