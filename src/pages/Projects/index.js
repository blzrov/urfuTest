import React from "react";
import "./Projects.scss";
import SelectYear from "../../components/SelectYear";
import TableWithOrder from "../../components/TableWithOrder";
import TableNoneOrder from "../../components/TableNoneOrder";

import Accordion from "../../components/Accordion";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Projects() {
  return (
    <div className="projects">
      <p>Период</p>
      <SelectYear />
      <h2>Плановое количество проектов программы - 215</h2>
      <h2>Одобренных проектов на ЭГ - 118</h2>
      <Accordion
        title="Детализация по стратегическим проектам"
        body={<TableWithOrder />}
      />

      <Accordion
        title="Детализация по типу финансирования"
        body={<TableNoneOrder />}
      />

      <h2>Одобренных портфелей проектов на ЭГ - 97</h2>

      <Accordion title="Детализация по стратегическим проектам" />

      <Accordion title="Детализация по типу финансирования" />

      <h2>Распределение проектов по типам к общему числу проектов</h2>
      <p>Период</p>
      <SelectYear />
      <div style={{ width: "25%" }}>
        <Chart />
      </div>
    </div>
  );
}

function Chart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
    },
  };

  return <Doughnut width={130} height={50} data={data} options={options} />;
}

const data = {
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
