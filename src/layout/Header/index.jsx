import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <p className={styles.top}>
          <b>
            приоритет<span className={styles.red}>2030^</span>
          </b>
        </p>
        <p className={styles.bottom}>
          <b className={styles.red}>лидерами становятся</b>
        </p>
      </div>
      <div>
        <p className={styles.top}>Программа развития УрФУ на 2021-2030 годы</p>
        <p className={styles.bottom}>Исследовательское лидерство</p>
      </div>
      <Link to="Другие программы" className={styles.other}>
        Другие программы
      </Link>
    </div>
  );
}
