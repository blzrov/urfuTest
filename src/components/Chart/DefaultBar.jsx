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
      },
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "512px" }}>
      <Bar options={options} data={data} />
    </div>
  );
}
