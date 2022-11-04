import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <p className="top">
          <b>
            приоритет<span className="red">2030^</span>
          </b>
        </p>
        <p className="bottom">
          <b className="red">лидерами становятся</b>
        </p>
      </div>

      <div>
        <p className="top">Программа развития УрФУ на 2021-2030 годы</p>
        <p className="bottom">Исследовательское лидерство</p>
      </div>
      <b className="other">Другие программы</b>
    </div>
  );
}
