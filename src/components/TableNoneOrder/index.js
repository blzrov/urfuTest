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
        {data.map((elem, index) => {
          return (
            <tr key={index}>
              <td className={styles.first + " " + styles.td}>{elem.title}</td>
              <td className={styles.td}>{elem.plan}</td>
              <td className={styles.bold + " " + styles.td}>{elem.approved}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

const data = [
  {
    title: "Базовая часть",
    plan: 3,
    approved: 2,
  },
  {
    title: "Специальная часть",
    plan: 9,
    approved: 10,
  },
];
