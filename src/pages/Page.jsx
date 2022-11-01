import React from "react";
import "./Page.scss";
import ExecutionProgress from "./ExecutionProgress";
import Projects from "./Projects";
import Budget from "./Budget";

export default function Page() {
  const [page, setPage] = React.useState(1);
  return (
    <>
      <div className="back">&lt; Вернуться назад</div>
      <div className="title">Ключевые индикаторы программы</div>
      <Nav page={page} setPage={setPage} />
      {page === 1 ? (
        <ExecutionProgress />
      ) : page === 2 ? (
        <Projects />
      ) : (
        <Budget />
      )}
    </>
  );
}

function Nav({ page, setPage }) {
  console.log(page);
  return (
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
  );
}
