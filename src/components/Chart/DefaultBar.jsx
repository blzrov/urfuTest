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

export default function DefaultBar({ data }) {
  const options = {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Бюджет, млн. руб",
        position: "left",
        font: { size: 16, weight: 500, family: "Open Sans" },
      },
      legend: {
        position: "top",
        onClick: "return",
        labels: {
          boxWidth: 0,
          font: { size: 16, family: "Open Sans", weight: "500" },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div>
      <Bar height={512} options={options} data={data} />
    </div>
  );
}
