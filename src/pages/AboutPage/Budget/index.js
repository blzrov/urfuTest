import React, { useState } from "react";
import styles from "./Budget.module.css";
import SelectYear from "../../../components/SelectYear";
import Accordion from "../../../components/Accordion";
import StackedBar from "../../../components/Charts/StackedBar";
import DefaultBar from "../../../components/Charts/DefaultBar";

export default function Budget() {
  const [state, setState] = useState(false);

  function toggleLegend() {
    setState((prev) => !prev);
  }

  return (
    <div className={styles.budget}>
      <p style={{ fontWeight: "600" }}>Период</p>
      <div className={styles.period}>
        <SelectYear />
        <span className={styles.info}>
          *Информация представлена по состоянию на 20.09.2022
        </span>
      </div>
      <StackedBar labels data={StackedBarData} />
      <h2 className={styles.title}>Детализация</h2>
      <Accordion blue title="По соглашениям">
        <div className={styles.stackedwrapper}>
          <div className={styles.legendwrapper}>
            <div style={{ display: "flex" }}>
              <span onClick={toggleLegend} className={styles.button}>
                Показать легенду
              </span>
            </div>
            {state && (
              <div className={styles.legend}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column-reverse",
                  }}
                >
                  {StackedBarData3.datasets.map((elem, index) => {
                    return (
                      <div
                        style={{
                          width: "24px",
                          height: "8px",
                          marginBottom: "24px",
                          backgroundColor: elem.backgroundColor,
                          marginRight: "24px",
                          lineHeight: "20px",
                        }}
                      ></div>
                    );
                  })}
                </div>
                {
                  <div
                    style={{ display: "flex", flexDirection: "column-reverse" }}
                  >
                    {StackedBarData3.datasets.map((elem, index) => {
                      return (
                        <span
                          key={index}
                          style={{
                            fontSize: "14px",
                            fontWeight: "600",
                            color: "#7F7F7F",
                            marginBottom: "10px",
                            lineHeight: "20px",
                          }}
                        >
                          {elem.label}
                        </span>
                      );
                    })}
                  </div>
                }
              </div>
            )}
          </div>
          <StackedBar data={StackedBarData2} />
          <StackedBar data={StackedBarData3} />
        </div>
      </Accordion>

      <h2 className={styles.title} style={{ marginBottom: "35px" }}>
        Одобренные средста в проектах определенного типа от общего бюджета
      </h2>
      <DefaultBar data={DefaultBarData} />
    </div>
  );
}

const DefaultBarData = {
  labels: [
    "Социальный 3 шт",
    "Организационный 4 шт",
    "Научный 6 шт",
    "Образовательный 8 шт",
    "Предпринимательский 10 шт",
    "Инфраструктурный 12 шт",
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

const StackedBarData2 = {
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

const StackedBarData3 = {
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
