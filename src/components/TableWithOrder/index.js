import "./TableWithOrder.scss";

export default function TableWithOrder() {
  return (
    <table className="tableWithOrder">
      <thead>
        <tr>
          <th>№</th>
          <th style={{ textAlign: "start" }}>Направления СП</th>
          <th>Плановое количество проектов</th>
          <th>Одобренное количество проектов на ЭГ</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1.</td>
          <td style={{ textAlign: "start" }}>
            Материалы и технологии для водородной и ядерной энергетики
          </td>
          <td>3</td>
          <td>2</td>
        </tr>
        <tr>
          <td>2.</td>
          <td style={{ textAlign: "start" }}>
            Дизайн и технологии функциональных материалов и систем
          </td>
          <td>9</td>
          <td>10</td>
        </tr>
        <tr>
          <td>3.</td>
          <td style={{ textAlign: "start" }}>
            Благополучие человека в условиях цифровой трансформации
          </td>
          <td>12</td>
          <td>11</td>
        </tr>
        <tr>
          <td>4.</td>
          <td style={{ textAlign: "start" }}>Академическое превосходство</td>
          <td>27</td>
          <td>79</td>
        </tr>
        <tr>
          <td>5.</td>
          <td style={{ textAlign: "start" }}>
            Образование: кадры для научно-технологического прорыва
          </td>
          <td>15</td>
          <td>16</td>
        </tr>
      </tbody>
    </table>
  );
}
