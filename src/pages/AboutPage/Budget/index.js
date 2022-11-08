import React, { useState } from "react";
import styles from "./Budget.module.css";
import Select from "../../../components/Select";
import Accordion from "../../../components/Accordion";
import StackedBar from "../../../components/Charts/StackedBar";
import DefaultBar from "../../../components/Charts/DefaultBar";

export default function Budget() {
  const [isOpenLegend, setIsOpenLegend] = useState(false);

  return (
    <div className={styles.budget}>
      <p className={styles.fw_600}>Период</p>
      <div className={styles.period}>
        <Select items={[2022, 2021]} />
        <span className={styles.info}>
          *Информация представлена по состоянию на 20.09.2022
        </span>
      </div>
      <StackedBar labels data={StackedBarData} />
      <h2 className={styles.title}>Детализация</h2>
      <Accordion title="По соглашениям">
        <div className={styles.stackeds}>
          <div className={styles.wrapper_legend}>
            <div style={{ display: "flex" }}>
              <span
                onClick={() => setIsOpenLegend((prev) => !prev)}
                className={styles.legend_toggle}
              >
                Показать легенду
              </span>
            </div>

            {isOpenLegend && (
              <div className={styles.legend}>
                {StackedBarData3.datasets.map((elem, index) => {
                  return (
                    <div key={index} className={styles.label}>
                      <div
                        className={styles.box}
                        style={{
                          backgroundColor: elem.backgroundColor,
                        }}
                      ></div>
                      <div className={styles.text}>{elem.label}</div>
                    </div>
                  );
                })}
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
