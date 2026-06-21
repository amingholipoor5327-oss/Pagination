import Link from "next/link";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello, welcome to this page
        </h1>

        <Link
          href="/pageination"
          className={styles.link}
        >
          Go
        </Link>
      </main>
    </div>
  );
}