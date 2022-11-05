import "./Sidebar.scss";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <img
        className="img"
        src={require("../../img/urfu_logo.png")}
        alt="urfu_logo"
      />
      <ul className="ul">
        <li className="li">
          <NavLink
            className="NavLink"
            to="/"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#EE6C68",
                  }
                : undefined
            }
          >
            О программе
          </NavLink>
          {/* <ul>
            <li>Ключевые индикаторы программы</li>
          </ul> */}
        </li>
        <li className="li">
          <NavLink className="NavLink" to="Новости">
            Новости
          </NavLink>
        </li>
        <li className="li">
          <NavLink className="NavLink" to="Документы">
            Документы
          </NavLink>
        </li>
        <li className="li">
          <NavLink className="NavLink" to="Управление бюджетом">
            Управление бюджетом
          </NavLink>
          {/* <ul>
            <li>Отчеты по бюджету</li>
          </ul> */}
        </li>
        <li className="li">
          <NavLink className="NavLink" to="Стратегические проекты">
            Стратегические проекты
          </NavLink>
        </li>
        <li className="li">
          <NavLink className="NavLink" to="Показатели">
            Показатели
          </NavLink>
        </li>
        <li className="li">
          <NavLink className="NavLink" to="Политики развития">
            Политики развития
          </NavLink>
        </li>
        <li className="li">
          <NavLink className="NavLink" to="Консорциумы">
            Консорциумы
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
