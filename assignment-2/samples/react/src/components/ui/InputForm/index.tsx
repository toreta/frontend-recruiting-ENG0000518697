import styles from "./style.module.css";

type Props = React.ComponentProps<"input"> & {
  label: string;
  role: string;
  message?: string;
};

export const InputForm: React.FC<Props> = ({
  label,
  role,
  type,
  value,
  placeholder,
  message,
  onChange,
}) => {
  const inputClassName = `${styles.input} ${
    message ? styles.error : styles.default
  }`;
  return (
    <div>
      <div className={styles.wrapper}>
        <label htmlFor={role} className={styles.label}>
          {label}
        </label>
        <input
          role={role}
          id={role}
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
