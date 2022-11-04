import React, { useState } from "react";
import "./Main.scss";
import ExecutionProgress from "./ExecutionProgress";
import Projects from "./Projects";
import Budget from "./Budget";

export default function Main() {
  const [page, setPage] = useState(1);

  return (
    <div className="main">
      <div className="back">&lt; Вернуться назад</div>
      <div className="title">Ключевые индикаторы программы</div>
      <div className="nav">
        <div
          className={page === 1 ? "nav_item current" : "nav_item"}
          onClick={() => {
            setPage(1);
          }}
        >
          Ход исполнения Программы развития
        </div>

        <div
          className={page === 2 ? "nav_item current" : "nav_item"}
          onClick={() => {
            setPage(2);
          }}
        >
          Количество проектов
        </div>

        <div
          className={page === 3 ? "nav_item current" : "nav_item"}
          onClick={() => {
            setPage(3);
          }}
        >
          Освоение бюджета по Программе развития 2021-2030 гг.
        </div>
      </div>
      {page === 1 ? (
        <ExecutionProgress />
      ) : page === 2 ? (
        <Projects />
      ) : (
        <Budget />
      )}
    </div>
  );
}
