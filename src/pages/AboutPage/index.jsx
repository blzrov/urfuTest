import React, { useState } from "react";
import styles from "./index.module.css";
import ExecutionProgress from "./ExecutionProgress";
import Projects from "./Projects";
import Budget from "./Budget";

export default function About() {
  const [page, setPage] = useState(1);

  return (
    <div>
      <div className={styles.back}>&lt; Вернуться назад</div>
      <div className={styles.title}>Ключевые индикаторы программы</div>
      <div className={styles.nav}>
        <div
          className={
            page === 1
              ? `${styles.nav_item + " " + styles.current}`
              : `${styles.nav_item}`
          }
          onClick={() => {
            setPage(1);
          }}
        >
          Ход исполнения Программы развития
        </div>

        <div
          className={
            page === 2
              ? `${styles.nav_item + " " + styles.current}`
              : `${styles.nav_item}`
          }
          onClick={() => {
            setPage(2);
          }}
        >
          Количество проектов
        </div>

        <div
          className={
            page === 3
              ? `${styles.nav_item + " " + styles.current}`
              : `${styles.nav_item}`
          }
          onClick={() => {
            setPage(3);
          }}
        >
          Освоение бюджета по Программе развития 2021-2030 гг.
        </div>
      </div>
      {page === 1 ? (
        <ExecutionProgress />
      ) : page === 2 ? (
        <Projects />
      ) : (
        <Budget />
      )}
    </div>
  );
}
