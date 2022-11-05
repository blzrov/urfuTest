import React from "react";
import "./Projects.scss";
import SelectYear from "../../../components/SelectYear";
import TableWithOrder from "../../../components/TableWithOrder";
import TableNoneOrder from "../../../components/TableNoneOrder";

import Accordion from "../../../components/Accordion";
import Doughnut from "../../../components/Chart/Doughnut";

export default function Projects() {
  return (
    <div className="projects">
      <p>Период</p>
      <SelectYear />
      <h2>Плановое количество проектов программы - 215</h2>
      <h2>Одобренных проектов на ЭГ - 118</h2>
      <Accordion blue title="Детализация по стратегическим проектам">
        <TableWithOrder />
      </Accordion>
      <Accordion blue title="Детализация по типу финансирования">
        <TableNoneOrder />
      </Accordion>
      <h2>Одобренных портфелей проектов на ЭГ - 97</h2>
      <Accordion title="Детализация по стратегическим проектам">
        Тут ничего нет
      </Accordion>
      <Accordion title="Детализация по типу финансирования">
        Тут ничего нет
      </Accordion>
      <h2>Распределение проектов по типам к общему числу проектов</h2>
      <p>Период</p>
      <SelectYear />
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
