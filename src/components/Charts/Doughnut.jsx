import styles from "./Doughnut.module.css";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function DefaultDoughnut({ data }) {
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.doughnut}>
        <Doughnut width={336} height={336} data={data} options={options} />
        <span className={styles.summary}>
          Всего проектов
          <br />
          <br />
          <span className={styles.summary_num}>{data.summary}</span>
        </span>
      </div>
      <div className={styles.legendwrapper}>
        <div>
          {data.labels.map((elem, index) => {
            return (
              <div key={index} className={styles.countwrapper}>
                <div
                  className={styles.box}
                  style={{
                    backgroundColor: data.datasets[0].backgroundColor[index],
                  }}
                ></div>
                <span
                  className={styles.text}
                >{`${data.datasets[0].data[index]} шт `}</span>
              </div>
            );
          })}
        </div>
        <div className={styles.labels}>
          {data.labels.map((elem, index) => {
            return (
              <span key={index} className={styles.label}>
                {elem}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
