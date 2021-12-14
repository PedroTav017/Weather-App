import React from "react";

//styles
import styles from "../styles/components/error.module.css";

const Errors = (props: { errorMessage: string, reloadHandler: any }) => {
  return (
    <div className={styles.error}>
      <div className={styles.card}>
        <h1>Oh no... :(</h1>
        <p>{props.errorMessage}</p>
        <button onClick={props.reloadHandler}>Try again</button>
      </div>
    </div>
  );
};

export default Errors;
