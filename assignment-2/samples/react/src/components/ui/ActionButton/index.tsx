import styles from "./style.module.css";

type Props = React.ComponentProps<"button"> & {
  role: string;
};

export const ActionButton: React.FC<Props> = ({
  role,
  name,
  type,
  disabled = false,
}) => {
  const buttonClassName = `${styles.button} ${
    disabled ? styles.disabled : styles.default
  }`;
  return (
    <button
      role={role}
      disabled={disabled}
      type={type}
      className={buttonClassName}
    >
      {name}
    </button>
  );
};
