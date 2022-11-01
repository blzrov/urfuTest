import React from "react";
import "./Budget.scss";
import SelectYear from "../../components/SelectYear";

export default function Budget() {
  return (
    <div>
      <SelectYear />
      <h2>Детализация</h2>
      <h2>
        Одобренные средста в проектах определенного типа от общего бюджета
      </h2>
    </div>
  );
}
