import React from "react";
import "./Projects.scss";
import SelectYear from "../../components/SelectYear";

export default function Projects() {
  return (
    <div>
      <SelectYear />
      <h2>Плановое количество проектов программы</h2>
      <h2>Одобренных проектов на ЭГ</h2>
      <h2>Одобренных портфелей проектов на ЭГ</h2>
      <h2>Распределение проектов по типам к общему числу проектов</h2>
    </div>
  );
}
