import React from "react";
import styles from "./Sidebar.module.css";
// eslint-disable-next-line
import { NavLink, Link } from "react-router-dom";

export default function Sidebar() {
  const [state, setState] = React.useState("");

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
            to="about"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#EE6C68",
                  }
                : undefined
            }
          >
            {({ isActive }) => {
              if (isActive) {
                setState("about");
              } else {
                setState(null);
              }
              return "О программе";
            }}
          </NavLink>
          {state === "about" ? (
            <ul className={styles.ul}>
              <li>
                <NavLink
                  className={styles.NavLink2}
                  to="/about/Ключевые индикаторы программы"
                >
                  Ключевые индикаторы программы
                </NavLink>
              </li>
            </ul>
          ) : (
            ""
          )}
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
// eslint-disable-next-line
function Li({ title, subLi }) {
  return (
    <>
      {title}
      <ul className={styles.ul}>
        <li>123</li>
      </ul>
    </>
  );
}
