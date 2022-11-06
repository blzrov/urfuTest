import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function DefaultDoughnut({ data }) {
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "right",
        onClick: "return",
      },
    },
  };

  return (
    <div style={{ height: "240px" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}
