import styles from "./style.module.css";

type Props = React.ComponentProps<"input">;

export const InputForm: React.FC<Props> = ({
  name,
  type,
  value,
  placeholder,
}) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{name}</label>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};
