import React, { useRef } from "react";
import styles from "./ExecutionProgress.module.css";

export default function ExecutionProgress() {
  const li = useRef();
  const current = useRef();
  const first = useRef();
  const firstSVG = useRef();

  function f(e) {
    let left = li.current.getBoundingClientRect().left;
    current.current.style.left = left - 232 + "px";
    firstSVG.current.style.left =
      first.current.getBoundingClientRect().left - 232 - 73 + "px";
  }

  React.useEffect(f, []);

  return (
    <div className={styles.executionProgress}>
      <ul onScroll={f} className={styles.ul}>
        {data?.map((elem, index) => (
          <li
            key={index}
            className={styles.li}
            ref={elem.isCurrent ? li : index === 0 ? first : null}
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

      <svg
        style={{ position: "absolute", bottom: 67, width: "100%" }}
        width="100%"
        height="2"
        viewBox="0 0 1137 2"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line y1="1" x2="1137" y2="1" stroke="#D4D4D4" strokeWidth="2" />
      </svg>

      <svg
        ref={firstSVG}
        style={{ position: "absolute", bottom: 62 }}
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="7" cy="7" r="7" fill="#D4D4D4" />
      </svg>

      <svg
        ref={current}
        style={{ position: "absolute", bottom: 50 }}
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
          fill="url(#paint0_linear_33149_141622)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_33149_141622"
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
