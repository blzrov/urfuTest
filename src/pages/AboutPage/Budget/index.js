import React from "react";
import styles from "./Budget.module.css";
import SelectYear from "../../../components/SelectYear";
import Accordion from "../../../components/Accordion";
import StackedBar from "../../../components/Chart/StackedBar";
import DefaultBar from "../../../components/Chart/DefaultBar";

export default function Budget() {
  return (
    <div className={styles.budget}>
      <p>Период</p>
      <div className={styles.period}>
        <SelectYear />
        <span className={styles.info}>
          *Информация представлена по состоянию на 20.09.2022
        </span>
      </div>
      <StackedBar data={StackedBarData} />
      <h2 className={styles.title}>Детализация</h2>
      <Accordion blue title="По соглашениям">
        <div className={styles.Stackedwrapper}>
          <StackedBar data={StackedBarData2} />
          <StackedBar data={StackedBarData3} />
        </div>
      </Accordion>

      <h2 className={styles.title}>
        Одобренные средста в проектах определенного типа от общего бюджета
      </h2>
      <DefaultBar data={DefaultBarData} />
    </div>
  );
}

const DefaultBarData = {
  labels: [
    "Социальный",
    "Организационный",
    "Научный",
    "Образовательный",
    "Предпринимательский",
    "Инфраструктурный",
  ],
  datasets: [
    {
      label: "Количество проектов, шт",
      data: [150, 80, 50, 120, 70, 10],
      backgroundColor: "#305FFD",
      barThickness: 40,
    },
  ],
};

const StackedBarData = {
  labels: ["2022"],
  datasets: [
    {
      label: "589 Оплачено",
      data: [589],
      backgroundColor: "#0A0052",
      barThickness: 70,
    },
    {
      label: "600 Законтрактовано",
      data: [600],
      backgroundColor: "#0A2A9A",
      barThickness: 70,
    },
    {
      label: "637 Акцептовано ПФУ",
      data: [637],
      backgroundColor: "#305FFD",
      barThickness: 70,
    },
    {
      label: "745 Утверждено средств по закупкам",
      data: [745],
      backgroundColor: "#7585D1",
      barThickness: 70,
    },
    {
      label: "892 Одобрено средств по проектам",
      data: [892],
      backgroundColor: "#B3B9C8",
      barThickness: 70,
    },
    {
      label: "924 План по соглашениям",
      data: [924],
      backgroundColor: "#C2D0EE",
      barThickness: 70,
    },
  ],
};

const StackedBarData2 = {
  labels: ["075-15-2021-1331 - Наука и университеты"],
  datasets: [
    {
      label: "589",
      data: [589],
      backgroundColor: "#0A0052",
      barThickness: 70,
    },
    {
      label: "600",
      data: [600],
      backgroundColor: "#0A2A9A",
      barThickness: 70,
    },
    {
      label: "637",
      data: [637],
      backgroundColor: "#305FFD",
      barThickness: 70,
    },
    {
      label: "745",
      data: [745],
      backgroundColor: "#7585D1",
      barThickness: 70,
    },
    {
      label: "892",
      data: [892],
      backgroundColor: "#B3B9C8",
      barThickness: 70,
    },
    {
      label: "924",
      data: [924],
      backgroundColor: "#C2D0EE",
      barThickness: 70,
    },
  ],
};

const StackedBarData3 = {
  labels: ["075-15-2021-1331 - Развитие кадрового потенциала IT-отрасли"],
  datasets: [
    {
      label: "589",
      data: [589],
      backgroundColor: "#0A0052",
      barThickness: 70,
    },
    {
      label: "600",
      data: [600],
      backgroundColor: "#0A2A9A",
      barThickness: 70,
    },
    {
      label: "637",
      data: [637],
      backgroundColor: "#305FFD",
      barThickness: 70,
    },
    {
      label: "745",
      data: [745],
      backgroundColor: "#7585D1",
      barThickness: 70,
    },
    {
      label: "892",
      data: [892],
      backgroundColor: "#B3B9C8",
      barThickness: 70,
    },
    {
      label: "924",
      data: [924],
      backgroundColor: "#C2D0EE",
      barThickness: 70,
    },
  ],
};
