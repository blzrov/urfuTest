import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <img
        className={styles.img}
        src={require("../../img/urfu_logo.png")}
        alt="urfu_logo"
      />
      <ul className={styles.ul}>
        <li className={styles.li}>
          <NavLink
            className={styles.NavLink}
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
        <li className={styles.li}>
          <NavLink className={styles.NavLink} to="Новости">
            Новости
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink className={styles.NavLink} to="Документы">
            Документы
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink className={styles.NavLink} to="Управление бюджетом">
            Управление бюджетом
          </NavLink>
          {/* <ul>
            <li>Отчеты по бюджету</li>
          </ul> */}
        </li>
        <li className={styles.li}>
          <NavLink className={styles.NavLink} to="Стратегические проекты">
            Стратегические проекты
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink className={styles.NavLink} to="Показатели">
            Показатели
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink className={styles.NavLink} to="Политики развития">
            Политики развития
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink className={styles.NavLink} to="Консорциумы">
            Консорциумы
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
