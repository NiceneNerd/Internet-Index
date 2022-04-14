import styles from "../styles/components/Grid.module.scss";

function Grid({ children }) {
  return <div className={styles.grid}>{children}</div>;
}

function Item({ children }) {
  return <div className={styles.item}>{children}</div>;
}

function Title({ children }) {
  return <div className={styles.title}>{children}</div>;
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
