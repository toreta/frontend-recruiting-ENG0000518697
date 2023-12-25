import styles from "./style.module.css";

type Props = React.ComponentProps<"button">;

export const ActionButton: React.FC<Props> = ({ name, type, disabled }) => {
  const buttonClassName = `${styles.button} ${
    disabled ? styles.disabled : styles.default
  }`;
  return (
    <button disabled={disabled} type={type} className={buttonClassName}>
      {name}
    </button>
  );
};
