import "./TableWithOrder.scss";

export default function TableWithOrder() {
  return (
    <table className="tableWithOrder">
      <thead>
        <tr>
          <th style={{ width: "60px" }}>№</th>
          <th style={{ textAlign: "start", width: "270px" }}>Направления СП</th>
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
          <td>1.</td>
          <td style={{ textAlign: "start" }}>
            Материалы и технологии для водородной и ядерной энергетики
          </td>
          <td>3</td>
          <td className="bold">2</td>
        </tr>
        <tr>
          <td>2.</td>
          <td style={{ textAlign: "start" }}>
            Дизайн и технологии функциональных материалов и систем
          </td>
          <td>9</td>
          <td className="bold">10</td>
        </tr>
        <tr>
          <td>3.</td>
          <td style={{ textAlign: "start" }}>
            Благополучие человека в условиях цифровой трансформации
          </td>
          <td>12</td>
          <td className="bold">11</td>
        </tr>
        <tr>
          <td>4.</td>
          <td style={{ textAlign: "start" }}>Академическое превосходство</td>
          <td>27</td>
          <td className="bold">79</td>
        </tr>
        <tr>
          <td>5.</td>
          <td style={{ textAlign: "start" }}>
            Образование: кадры для научно-технологического прорыва
          </td>
          <td>15</td>
          <td className="bold">16</td>
        </tr>
      </tbody>
    </table>
  );
}
