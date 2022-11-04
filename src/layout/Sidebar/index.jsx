import "./Sidebar.scss";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <img src={require("../../img/urfu_logo.png")} alt="urfu_logo" />
      <ul>
        <li>
          <h3>О программе</h3>
          <ul>
            <li>Ключевые индикаторы программы</li>
          </ul>
        </li>
        <li>
          <h3>Новости</h3>
        </li>
        <li>
          <h3>Документы</h3>
        </li>
        <li>
          <h3>Управление бюджетом</h3>
          {/* <ul>
            <li>Отчеты по бюджету</li>
          </ul> */}
        </li>
        <li>
          <h3>Стратегические проекты</h3>
        </li>
        <li>
          <h3>Показатели</h3>
        </li>
        <li>
          <h3>Политики развития</h3>
        </li>
        <li>
          <h3>Консорциумы</h3>
        </li>
      </ul>
    </div>
  );
}
