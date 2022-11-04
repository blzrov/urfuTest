import "./TableNoneOrder.scss";

export default function TableNoneOrder() {
  return (
    <table className="tableNoneOrder">
      <thead>
        <tr>
          <th style={{ textAlign: "start" }}>Тип финансирования</th>
          <th>Плановое количество проектов</th>
          <th>Одобренное количество проектов на ЭГ</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ textAlign: "start" }}>Базовая часть</td>
          <td>3</td>
          <td>2</td>
        </tr>
        <tr>
          <td style={{ textAlign: "start" }}>Специальная часть</td>
          <td>9</td>
          <td>10</td>
        </tr>
      </tbody>
    </table>
  );
}
