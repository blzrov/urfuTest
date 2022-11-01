import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <div>
        <p style={{ fontSize: "24px" }}>
          <b>
            приоритет<span className="red">2030^</span>
          </b>
        </p>
        <p style={{ fontSize: "16px" }}>
          <b className="red">лидерами становятся</b>
        </p>
      </div>

      <div>
        <p style={{ fontSize: "24px" }}>
          Программа развития УрФУ на 2021-2030 годы
        </p>
        <p style={{ fontSize: "16px" }}>Исследовательское лидерство</p>
      </div>
      <span style={{ marginLeft: "auto", fontSize: "16px" }}>
        Другие программы
      </span>
    </div>
  );
}
