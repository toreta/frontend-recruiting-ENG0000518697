import { OptionType } from "../../../types/common";
import styles from "./style.module.css";

type Props = React.ComponentPropsWithRef<"select"> & {
  label: string;
  role: string;
  options: Array<OptionType>;
  message?: string;
};

export const SelectForm: React.FC<Props> = ({
  label,
  role,
  name,
  value = "",
  options,
  message,
  onChange,
}) => {
  const selectClassName = `${styles.select} ${
    message ? styles.error : styles.default
  } ${value === "" ? styles.selectPlaceholderColor : styles.selectedColor}`;
  const messageRole = `${role}-message`;
  return (
    <div>
      <div className={styles.wrapper}>
        <label htmlFor={role} className={styles.label}>
          {label}
        </label>
        <select
          role={role}
          id={role}
          className={selectClassName}
          name={name}
          defaultValue={value}
          onChange={onChange}
        >
          <>
            <option key={`select-${name}-0}`} disabled value="">
              選択してください
            </option>
            {options.map((option, i) => (
              <option key={`select-${name}-${i}}`} value={option.value}>
                {option.label}
              </option>
            ))}
          </>
        </select>
      </div>
      {message && (
        <p role={messageRole} className={styles.message}>
          {message}
        </p>
      )}
    </div>
  );
};
