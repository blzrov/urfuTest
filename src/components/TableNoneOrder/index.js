import styles from "./TableNoneOrder.module.css";

export default function TableNoneOrder({ data }) {
  return (
    <table className={styles.tableNoneOrder}>
      <thead>
        <tr>
          <th className={`${styles.th} ${styles.firstTH}`}>
            Тип финансирования
          </th>
          <th className={styles.th}>
            <div className={styles.main}>Плановое количество проектов</div>
          </th>
          <th className={styles.th}>
            <div className={styles.main}>
              Одобренное количество проектов на ЭГ
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {data?.map((elem, index) => {
          return (
            <tr key={index}>
              <td className={`${styles.firstTD} ${styles.td}`}>{elem.title}</td>
              <td className={styles.td}>{elem.plan}</td>
              <td className={`${styles.bold} ${styles.td}`}>{elem.approved}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
