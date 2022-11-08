import React, { useState } from "react";
import styles from "./Accordion.module.css";

export default function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.accordion}>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={
          isOpen
            ? `${styles.accordion_header} ${styles.accordion_open}`
            : styles.accordion_header
        }
      >
        <span>{title}</span>
        <svg
          className={!isOpen ? styles.svg_open : null}
          width="33"
          height="19"
          viewBox="0 0 33 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 17.3027L16.5 1.80274L1 17.3027"
            stroke="#7F7F7F"
            strokeWidth="2"
          />
        </svg>
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  );
}
