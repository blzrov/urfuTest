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

export default function StackedBar({ data }) {
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
    <div style={{ width: "50%" }}>
      <Bar height={300} options={options} data={data} />
    </div>
  );
}
