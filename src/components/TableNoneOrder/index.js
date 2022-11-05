import "./TableNoneOrder.scss";

export default function TableNoneOrder() {
  return (
    <table className="tableNoneOrder">
      <thead>
        <tr>
          <th
            style={{ textAlign: "start", width: "330px", paddingLeft: "17px" }}
          >
            Тип финансирования
          </th>
          <th>
            <div className="mx">Плановое количество проектов</div>
          </th>
          <th>
            <div className="mx">Одобренное количество проектов на ЭГ</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ textAlign: "start", paddingLeft: "17px" }}>
            Базовая часть
          </td>
          <td>3</td>
          <td className="bold">2</td>
        </tr>
        <tr>
          <td style={{ textAlign: "start", paddingLeft: "17px" }}>
            Специальная часть
          </td>
          <td>9</td>
          <td className="bold">10</td>
        </tr>
      </tbody>
    </table>
  );
}
