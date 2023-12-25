import styles from "./style.module.css";

type Props = React.ComponentProps<"input"> & {
  label: string;
  message?: string;
};

export const InputForm: React.FC<Props> = ({
  label,
  type,
  value,
  placeholder,
  message,
  onChange,
}) => {
  const inputClassName = `${styles.input} ${
    (styles.select, message ? styles.error : styles.default)
  }`;
  return (
    <div>
      <div className={styles.wrapper}>
        <label className={styles.label}>{label}</label>
        <input
          className={inputClassName}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};
