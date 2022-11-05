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

  return (
    <div style={{ width: "50%", height: "300px" }}>
      <Bar options={options} data={data} />
    </div>
  );
}
