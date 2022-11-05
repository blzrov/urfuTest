import styles from "./TableWithOrder.module.css";

export default function TableWithOrder() {
  return (
    <table className={styles.tableWithOrder}>
      <thead>
        <tr>
          <th className={styles.th + " " + styles.width60}>№</th>
          <th className={styles.th + " " + styles.tac + " " + styles.width270}>
            Направления СП
          </th>
          <th className={styles.th}>
            <div className={styles.mx}>Плановое количество проектов</div>
          </th>
          <th className={styles.th}>
            <div className={styles.mx}>
              Одобренное количество проектов на ЭГ
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={styles.td}>1.</td>
          <td className={styles.td + " " + styles.tac}>
            Материалы и технологии для водородной и ядерной энергетики
          </td>
          <td className={styles.td}>3</td>
          <td className={styles.bold + " " + styles.td}>2</td>
        </tr>
        <tr>
          <td className={styles.td}>2.</td>
          <td className={styles.td + " " + styles.tac}>
            Дизайн и технологии функциональных материалов и систем
          </td>
          <td className={styles.td}>9</td>
          <td className={styles.bold + " " + styles.td}>10</td>
        </tr>
        <tr>
          <td className={styles.td}>3.</td>
          <td className={styles.td + " " + styles.tac}>
            Благополучие человека в условиях цифровой трансформации
          </td>
          <td className={styles.td}>12</td>
          <td className={styles.bold + " " + styles.td}>11</td>
        </tr>
        <tr>
          <td className={styles.td}>4.</td>
          <td className={styles.td + " " + styles.tac}>
            Академическое превосходство
          </td>
          <td className={styles.td}>27</td>
          <td className={styles.td + " " + styles.bold}>79</td>
        </tr>
        <tr>
          <td className={styles.td}>5.</td>
          <td className={styles.td + " " + styles.tac}>
            Образование: кадры для научно-технологического прорыва
          </td>
          <td className={styles.td}>15</td>
          <td className={styles.bold + " " + styles.td}>16</td>
        </tr>
      </tbody>
    </table>
  );
}
