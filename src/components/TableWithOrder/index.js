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
        {data.map((elem, index) => {
          return (
            <tr key={index}>
              <td className={styles.td}>{index + 1}</td>
              <td className={styles.td + " " + styles.tac}>{elem.title}</td>
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
    title: "Материалы и технологии для водородной и ядерной энергетики",
    plan: 3,
    approved: 2,
  },
  {
    title: "Дизайн и технологии функциональных материалов и систем",
    plan: 9,
    approved: 10,
  },
  {
    title: "Благополучие человека в условиях цифровой трансформации",
    plan: 12,
    approved: 11,
  },
  {
    title: "Академическое превосходство",
    plan: 27,
    approved: 79,
  },
  {
    title: "Образование: кадры для научно-технологического прорыва",
    plan: 16,
    approved: 16,
  },
];
