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
          <a href="/hire">Hire Me</a>
          <a href="https://calebdixonsmith.top/about/">About Me</a>
        </footer>
      </main>
    </div>
  );
}
