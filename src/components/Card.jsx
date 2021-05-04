import React from "react";
import styles from "../../styles/Card.module.css";
const Card = (props) => {
  const { title, description, onClick, disabled } = props;
  return (
    <div className={styles.card}>
      <h3 className={styles.heading}>{title}</h3>
      <div className={styles.headingContainer}>
        <p>{description}</p>
        <button className={styles.button} disabled={disabled} onClick={onClick}>
          Nominate
        </button>
      </div>
    </div>
  );
};
export default Card;
