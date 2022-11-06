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

export default function StackedBar({ data, labels }) {
  const options = {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Бюджет в млн. руб",
        position: "left",
      },
      legend: {
        display: false,
        position: "right",
        maxWidth: "300000",
        reverse: true,
        onClick: "return",
        labels: {
          boxWidth: 16,
          boxHeight: 8,
          font: { size: 16, weight: 600, family: "Open Sans" },
        },
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
    <div style={{ width: "50%", display: "flex", alignItems: "center" }}>
      <div style={{ width: "128px", height: "300px" }}>
        <Bar width={128} height={300} options={options} data={data} />
      </div>
      <div style={{ marginLeft: "42px" }}>
        {data.datasets.map((elem, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "9px",
                lineHeight: "20px",
              }}
            >
              <div
                style={{
                  width: "34px",
                  height: "8px",
                  backgroundColor: elem.backgroundColor,
                  marginRight: "24px",
                  lineHeight: "20px",
                }}
              ></div>
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  marginRight: "24px",
                  lineHeight: "20px",
                }}
              >{`${elem.data[0]} шт `}</span>
            </div>
          );
        })}
      </div>
      {labels && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          {data.datasets.map((elem, index) => {
            return (
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#7F7F7F",
                  marginBottom: "9px",
                  lineHeight: "20px",
                }}
              >
                {elem.label}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}
