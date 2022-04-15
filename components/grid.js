import cn from "classnames";
import Link from "next/link";
import styles from "../styles/components/Grid.module.scss";

function Grid({ children }) {
  return <div className={styles.grid}>{children}</div>;
}

function Item({ children, href }) {
  return href ? (
    href.includes("http") ? (
      <a className={styles.item} href={href} target="_blank">
        {children}
      </a>
    ) : (
      <Link href={href}>
        <div className={cn(styles.item, styles.pointer)}>{children}</div>
      </Link>
    )
  ) : (
    <div className={styles.item}>{children}</div>
  );
}

function Title({ children }) {
  return <h2 className={styles.title}>{children}</h2>;
}

function Body({ children }) {
  return <div className={styles.body}>{children}</div>;
}

function Footer({ children }) {
  return <footer className={styles.footer}>{children}</footer>;
}

Item = Object.assign(Item, {
  Title,
  Body,
  Footer,
});

export default Object.assign(Grid, {
  Item,
});
