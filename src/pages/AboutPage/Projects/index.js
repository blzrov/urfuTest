import React from "react";
import styles from "./Projects.module.css";
import Select from "../../../components/Select";
import Accordion from "../../../components/Accordion";
import TableWithOrder from "../../../components/TableWithOrder";
import TableNoneOrder from "../../../components/TableNoneOrder";
import Doughnut from "../../../components/Charts/Doughnut";

export default function Projects() {
  return (
    <div className={styles.projects}>
      <p className={styles.fw_600}>Период</p>
      <div>
        <Select items={[2022, 2021]} />
      </div>
      <h2 className={styles.title}>
        Плановое количество проектов программы
        <span className={styles.count}> &mdash; {count.plan}</span>
      </h2>
      <div className={styles.mb60}>
        <h2 className={styles.title}>
          Одобренных проектов на ЭГ
          <span className={styles.count}> &mdash; {count.projects}</span>
        </h2>
        <Accordion title="Детализация по стратегическим проектам">
          <TableWithOrder data={TableWithOrderData} />
        </Accordion>
        <Accordion title="Детализация по типу финансирования">
          <TableNoneOrder data={TableNoneOrderData} />
        </Accordion>
      </div>
      <div className={styles.mb60}>
        <h2 className={styles.title}>
          Одобренных портфелей проектов на ЭГ
          <span className={styles.count}> &mdash; {count.case}</span>
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
      <p className={styles.fw_600}>Период</p>
      <div style={{ marginBottom: "20px" }}>
        <Select items={[2022, 2021]}  />
      </div>
      <Doughnut data={DefaultDoughnutData} />
    </div>
  );
}

const count = {
  plan: 215,
  projects: 118,
  case: 97,
};

const TableWithOrderData = [
  {
    title: "Материалы и технологии для водородной и ядерной энергетики",
    plan: 3,
    approved: 2,
  },
  {
    title: "Дизайн и технологии функциональных материалов и систем",
    plan: 9,
    approved: 10,
  },
  {
    title: "Благополучие человека в условиях цифровой трансформации",
    plan: 12,
    approved: 11,
  },
  {
    title: "Академическое превосходство",
    plan: 27,
    approved: 79,
  },
  {
    title: "Образование: кадры для научно-технологического прорыва",
    plan: 16,
    approved: 16,
  },
];

const TableNoneOrderData = [
  {
    title: "Базовая часть",
    plan: 3,
    approved: 2,
  },
  {
    title: "Специальная часть",
    plan: 9,
    approved: 10,
  },
];

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
