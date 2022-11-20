import React, { useEffect, useRef } from "react";
import styles from "./ExecutionProgress.module.css";

export default function ExecutionProgress() {
  const ul = useRef();
  const left = useRef();
  const [px, spx] = React.useState(0);

  function f() {
    const a = left.current.getBoundingClientRect().left;
    spx(a);
  }

  useEffect(f, []);

  return (
    <div className={styles.executionProgress}>
      <span
        style={{
          width: "35px",
          heigth: "35px",
          position: "absolute",
          left: "0",
          cursor: "pointer",
          userSelect: "none",
          padding: "10px 0 0 10px",
          zIndex: 10,
        }}
        onClick={() => (ul.current.scrollLeft = ul.current.scrollLeft - 100)}
      >
        <svg
          width="20"
          height="35"
          viewBox="0 0 20 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.5 33L3 17.5L18.5 2"
            stroke={ul?.current?.scrollLeft === 0 ? "#D4D4D4" : "#E86868"}
            strokeWidth="3"
          />
        </svg>
      </span>

      <span
        style={{
          width: "35px",
          heigth: "35px",
          position: "absolute",
          right: "0",
          cursor: "pointer",
          userSelect: "none",
          padding: "10px 0 0 10px",
          zIndex: 10,
        }}
        onClick={() => (ul.current.scrollLeft = ul.current.scrollLeft + 100)}
      >
        <svg
          width="20"
          height="35"
          viewBox="0 0 18 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 2L17.5 17.5L2 33" stroke="#E86868" strokeWidth="3" />
        </svg>
      </span>

      <ul ref={ul} onScroll={f} className={styles.ul}>
        {data?.map((elem, index) => (
          <li
            ref={elem.isCurrent ? left : null}
            key={index}
            className={styles.li}
          >
            <b
              className={
                elem.isPassed ? `${styles.b} ${styles.past}` : `${styles.b}`
              }
            >
              {elem.title}
            </b>
            <p className={styles.p}>{elem.text}</p>
          </li>
        ))}
      </ul>

      {ul?.current?.scrollLeft === 0 && (
        <svg
          style={{ position: "absolute", bottom: "14.5" }}
          //First
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="7" cy="7" r="7" fill="#D4D4D4" />
        </svg>
      )}

      <svg
        style={{ position: "absolute", bottom: "20", width: "100%" }}
        //Линия
        width="1137"
        height="2"
        viewBox="0 0 1137 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <line y1="1" x2="1137" y2="1" stroke="#D4D4D4" strokeWidth="2" />
      </svg>

      <svg
        style={{ position: "absolute", bottom: "20", left: px - 272 }}
        width="255"
        height="2"
        viewBox="0 0 255 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="-8.74228e-08"
          y1="1"
          x2="255"
          y2="0.999978"
          stroke="#FD305D"
          strokeWidth="2"
        />
      </svg>

      <svg
        style={{
          position: "absolute",
          bottom: "3",
          backgroundColor: "white",
          left: px - 272,
        }}
        //Current
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="17" cy="17" r="9" fill="#FD305D" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34ZM17 31C24.732 31 31 24.732 31 17C31 9.26801 24.732 3 17 3C9.26801 3 3 9.26801 3 17C3 24.732 9.26801 31 17 31Z"
          fill="url(#paint0_linear_33183_141644)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34ZM17 31C24.732 31 31 24.732 31 17C31 9.26801 24.732 3 17 3C9.26801 3 3 9.26801 3 17C3 24.732 9.26801 31 17 31Z"
          fill="url(#paint1_linear_33183_141644)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_33183_141644"
            x1="34.2399"
            y1="16.999"
            x2="8.56533e-08"
            y2="16.999"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FE2E71" />
            <stop offset="0.48" stopColor="#FB3727" />
            <stop offset="1" stopColor="#FEEA0F" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_33183_141644"
            x1="34.2399"
            y1="16.999"
            x2="8.56533e-08"
            y2="16.999"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FE2E71" />
            <stop offset="0.48" stopColor="#FB3727" />
            <stop offset="1" stopColor="#FEEA0F" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

const data = [
  {
    isPassed: true,
    title: "12 августа 2022",
    text: "Подписание скорректированной системы МИНОБРНАУКИ. Формирование дополнительных соглашений.",
  },
  {
    isPassed: true,
    title: "24 августа 2022",
    text: "Интеграция образовательной, научной и инновационной деятельности. Вовлечение компетенций и ресурсов партнеров УрФУ в базовые процессы, в т.ч. образование и работу с молодежью.",
  },
  {
    isCurrent: true,
    title: "24 августа 2022",
    text: "Интеграция образовательной, научной и инновационной деятельности. Вовлечение компетенций и ресурсов партнеров УрФУ в базовые процессы, в т.ч. образование и работу с молодежью.",
  },
  {
    title: "24 августа 2022",
    text: "Интеграция образовательной, научной и инновационной деятельности. Вовлечение компетенций и ресурсов партнеров УрФУ в базовые процессы, в т.ч. образование и работу с молодежью.",
  },
  {
    title: "24 августа 2022",
    text: "Интеграция образовательной, научной и инновационной деятельности. Вовлечение компетенций и ресурсов партнеров УрФУ в базовые процессы, в т.ч. образование и работу с молодежью.",
  },
  {
    title: "24 августа 2022",
    text: "Интеграция образовательной, научной и инновационной деятельности. Вовлечение компетенций и ресурсов партнеров УрФУ в базовые процессы, в т.ч. образование и работу с молодежью.",
  },
  {
    title: "24 августа 2022",
    text: "Интеграция образовательной, научной и инновационной деятельности. Вовлечение компетенций и ресурсов партнеров УрФУ в базовые процессы, в т.ч. образование и работу с молодежью.",
  },
];
