import React from "react";
import "./Budget.scss";
import SelectYear from "../../../components/SelectYear";

import Accordion from "../../../components/Accordion";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Budget() {
  return (
    <div className="budget">
      <p>Период</p>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "42px" }}
      >
        <SelectYear />
        <span style={{ paddingLeft: "20px" }}>
          *Информация представлена по состоянию на 20.09.2022
        </span>
      </div>
      <div style={{ width: "50%" }}>
        <First />
      </div>
      <h2>Детализация</h2>
      <Accordion title="По соглашениям">
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <div style={{ width: "50%" }}>
            <First />
          </div>
          <div style={{ width: "50%" }}>
            <First />
          </div>
        </div>
      </Accordion>

      <h2>
        Одобренные средста в проектах определенного типа от общего бюджета
      </h2>
      <div style={{ width: "100%" }}>
        <Second />
      </div>
    </div>
  );
}

function First() {
  const data = {
    labels: ["2022"],
    datasets: [
      {
        label: "Оплачено",
        data: [589],
        backgroundColor: "#0A0052",
        barThickness: 70,
      },
      {
        label: "Законтрактовано",
        data: [600],
        backgroundColor: "#0A2A9A",
        barThickness: 70,
      },
      {
        label: "Акцептовано ПФУ",
        data: [637],
        backgroundColor: "#305FFD",
        barThickness: 70,
      },
      {
        label: "Утверждено средств по закупкам",
        data: [745],
        backgroundColor: "#7585D1",
        barThickness: 70,
      },
      {
        label: "Одобрено средств по проектам",
        data: [892],
        backgroundColor: "#B3B9C8",
        barThickness: 70,
      },
      {
        label: "План по соглашениям",
        data: [924],
        backgroundColor: "#C2D0EE",
        barThickness: 70,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Бюджет в млн. руб",
        position: "left",
      },
      legend: {
        position: "right",
        maxWidth: "1000",
        reverse: true,
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: false,
        ticks: {
          callback: null,
        },
      },
    },
  };

  return <Bar options={options} height={"300px"} data={data} />;
}

function Second() {
  const labels = [
    "Социальный",
    "Организационный",
    "Научный",
    "Образовательный",
    "Предпринимательский",
    "Инфраструктурный",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Количество проектов, шт",
        data: [150, 80, 50, 120, 70, 10],
        backgroundColor: "#305FFD",
        barThickness: 40,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Бюджет, млн. руб",
        position: "left",
      },
    },
  };

  return <Bar height={300} options={options} data={data} />;
}
