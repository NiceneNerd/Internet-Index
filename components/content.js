import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/components/Content.module.scss";

export default function Content({ children }) {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {router.pathname != "/" && (
          <nav className={styles.nav}>
            <Link href="/">⇽ Home</Link>
          </nav>
        )}
        {children}
        <hr />
        <footer>
          <a href="https://twitter.com/CalebDixonSmith">@CalebDixonSmith</a>
        </footer>
      </main>
    </div>
  );
}
