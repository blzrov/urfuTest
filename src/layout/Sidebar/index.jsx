import "./Sidebar.scss";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <img src={require("../../img/urfu_logo.png")} alt="urfu_logo" />
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#EE6C68",
                  }
                : undefined
            }
          >
            <h3>О программе</h3>
          </NavLink>
          {/* <ul>
            <li>Ключевые индикаторы программы</li>
          </ul> */}
        </li>
        <li>
          <NavLink to="Новости">
            <h3>Новости</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to="Документы">
            <h3>Документы</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to="Управление бюджетом">
            <h3>Управление бюджетом</h3>
          </NavLink>
          {/* <ul>
            <li>Отчеты по бюджету</li>
          </ul> */}
        </li>
        <li>
          <NavLink to="Стратегические проекты">
            <h3>Стратегические проекты</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to="Показатели">
            <h3>Показатели</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to="Политики развития">
            <h3>Политики развития</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to="Консорциумы">
            <h3>Консорциумы</h3>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
