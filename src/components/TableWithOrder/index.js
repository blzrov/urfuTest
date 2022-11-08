import styles from "./TableWithOrder.module.css";

export default function TableWithOrder({data}) {
  return (
    <table className={styles.tableWithOrder}>
      <thead>
        <tr>
          <th className={`${styles.th} ${styles.width60}`}>№</th>
          <th className={`${styles.th} ${styles.tac} ${styles.width270}`}>
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
        {data?.map((elem, index) => {
          return (
            <tr key={index}>
              <td className={styles.td}>{index + 1}</td>
              <td className={`${styles.td} ${styles.tac}`}>{elem.title}</td>
              <td className={styles.td}>{elem.plan}</td>
              <td className={`${styles.bold} ${styles.td}`}>{elem.approved}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
