import styles from "./StackedBar.module.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function StackedBar({ data, labels, title }) {
  const options = {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Бюджет в млн. руб",
        position: "left",
        font: { size: 16, weight: 500, family: "Open Sans" },
      },
      legend: {
        display: false,
      },
      tooltip: { enabled: false },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        stacked: false,
        ticks: {
          callback: null,
        },
      },
    },
  };

  return (
    <div style={{ width: "50%" }}>
      <div className={styles.wrapper}>
        <div className={styles.bar}>
          <Bar width={128} height={300} options={options} data={data} />
        </div>

        <div className={styles.legendwrapper}>
          {data.datasets.map((elem, index) => {
            return (
              <div key={index} className={styles.countwrapper}>
                <div
                  className={styles.box}
                  style={{
                    backgroundColor: elem.backgroundColor,
                  }}
                ></div>
                <span className={styles.text}>{`${elem.data[0]} шт `}</span>
              </div>
            );
          })}
        </div>
        {labels && (
          <div className={styles.labels}>
            {data.datasets.map((elem, index) => {
              return (
                <span key={index} className={styles.label}>
                  {elem.label}
                </span>
              );
            })}
          </div>
        )}
      </div>
      <div className={styles.bar2}>{title}</div>
    </div>
  );
}
