import styles from "./TableNoneOrder.module.css";

export default function TableNoneOrder() {
  return (
    <table className={styles.tableNoneOrder}>
      <thead>
        <tr>
          <th className={styles.th + " " + styles.firstTH}>
            Тип финансирования
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
          <td className={styles.first + " " + styles.td}>Базовая часть</td>
          <td className={styles.td}>3</td>
          <td className={styles.bold + " " + styles.td}>2</td>
        </tr>
        <tr>
          <td className={styles.first + " " + styles.td}>Специальная часть</td>
          <td className={styles.td}>9</td>
          <td className={styles.bold + " " + styles.td}>10</td>
        </tr>
      </tbody>
    </table>
  );
}
