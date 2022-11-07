import React from "react";
import styles from "./Projects.module.css";
import SelectYear from "../../../components/SelectYear";
import Accordion from "../../../components/Accordion";
import TableWithOrder from "../../../components/TableWithOrder";
import TableNoneOrder from "../../../components/TableNoneOrder";
import Doughnut from "../../../components/Chart/Doughnut";

export default function Projects() {
  return (
    <div className={styles.projects}>
      <p style={{ fontWeight: "600" }}>Период</p>
      <div>
        <SelectYear />
      </div>
      <h2 className={styles.title}>
        Плановое количество проектов программы
        <span className={styles.count}> &mdash; 215</span>
      </h2>
      <div className={styles.mb60}>
        <h2 className={styles.title}>
          Одобренных проектов на ЭГ
          <span className={styles.count}> &mdash; 118</span>
        </h2>
        <Accordion title="Детализация по стратегическим проектам">
          <TableWithOrder />
        </Accordion>
        <Accordion title="Детализация по типу финансирования">
          <TableNoneOrder />
        </Accordion>
      </div>
      <div className={styles.mb60}>
        <h2 className={styles.title}>
          Одобренных портфелей проектов на ЭГ
          <span className={styles.count}> &mdash; 97</span>
        </h2>
        <Accordion title="Детализация по стратегическим проектам">
          Тут ничего нет
        </Accordion>
        <Accordion title="Детализация по типу финансирования">
          Тут ничего нет
        </Accordion>
      </div>

      <h2 className={styles.title} style={{ marginBottom: "21px" }}>
        Распределение проектов по типам к общему числу проектов
      </h2>
      <p style={{ fontWeight: "600" }}>Период</p>
      <div style={{ marginBottom: "20px" }}>
        <SelectYear />
      </div>
      <Doughnut data={DefaultDoughnutData} />
    </div>
  );
}

const DefaultDoughnutData = {
  labels: [
    "Научный",
    "Организационный",
    "Инфраструктурный",
    "Образовательный",
    "Предпринимательство и инновации",
    "Социальный",
  ],
  datasets: [
    {
      label: "Всего проектов",
      data: [103, 78, 43, 32, 24, 2],
      backgroundColor: [
        "#0A0052",
        "#BEBEBE",
        "#7585D1",
        "#C2D0EE",
        "#7F7F7F",
        "#305FFD",
      ],
    },
  ],
};
