import cn from "classnames";
import styles from "../styles/components/Modal.module.scss";

export default function Modal({ children, show, border, onClose }) {
  const escape = e => {
    if (e.key == "Escape") {
      onClose();
      document.removeEventListener("keyup", escape);
    }
  };
  document.addEventListener("keyup", escape);
  return (
    show && (
      <div className={styles.modal} onClick={onClose}>
        <div
          className={cn(styles.modalBody, { [styles.noBorder]: !border })}
          onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>
    )
  );
}
