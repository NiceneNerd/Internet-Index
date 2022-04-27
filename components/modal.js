import cn from "classnames";
import styles from "../styles/components/Modal.module.scss";

export default function Modal({ children, show, border, onClose }) {
  document.body.classList.add("modalOpen");
  const close = () => {
    document.body.classList.remove("modalOpen");
    onClose();
  };
  const escape = e => {
    if (e.key == "Escape") {
      close();
      document.removeEventListener("keyup", escape);
    }
  };
  document.addEventListener("keyup", escape);
  return (
    show && (
      <div className={styles.modal} onClick={close}>
        <div
          className={cn(styles.modalBody, { [styles.noBorder]: !border })}
          onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>
    )
  );
}
