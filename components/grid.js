import cn from "classnames";
import Link from "next/link";
import styles from "../styles/components/Grid.module.scss";

function Grid({ children }) {
  return <div className={styles.grid}>{children}</div>;
}

function Item({ children, href }) {
  const inner = (
    <div
      className={cn(styles.item, { [styles.pointer]: href })}
      {...(href && {
        title: href
      })}>
      {children}
    </div>
  );
  return href ? <Link href={href}>{inner}</Link> : inner;
}

function Title({ children }) {
  return <h2 className={styles.title}>{children}</h2>;
}

function Body({ children }) {
  return <div className={styles.body}>{children}</div>;
}

Item = Object.assign(Item, {
  Title,
  Body
});

export default Object.assign(Grid, {
  Item
});
