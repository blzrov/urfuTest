import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function DefaultDoughnut({ data }) {
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "right",
        onClick: "return",
      },
    },
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ width: "336px", height: "336px", marginLeft: "80px" }}>
        <Doughnut width={336} height={336} data={data} options={options} />
      </div>
      <div
        style={{ marginLeft: "160px", display: "flex", alignItems: "center" }}
      >
        <div>
          {data.labels.map((elem, index) => {
            return (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "24px",
                  lineHeight: "20px",
                }}
              >
                <div
                  style={{
                    width: "34px",
                    height: "8px",
                    backgroundColor: data.datasets[0].backgroundColor[index],
                    marginRight: "24px",
                    lineHeight: "20px",
                  }}
                ></div>
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    marginRight: "24px",
                    lineHeight: "20px",
                  }}
                >{`${data.datasets[0].data[index]} шт `}</span>
              </div>
            );
          })}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {data.labels.map((elem, index) => {
            return (
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#7F7F7F",
                  marginBottom: "24px",
                  lineHeight: "20px",
                }}
              >
                {elem}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
