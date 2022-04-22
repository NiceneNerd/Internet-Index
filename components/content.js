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
        <footer className={styles.footer}>
          <a href="/resume.pdf">Résumé</a>
          <a href="https://github.com/NiceneNerd">GitHub</a>
          <a href="https://twitter.com/CalebDixonSmith">Twitter</a>
        </footer>
      </main>
    </div>
  );
}
