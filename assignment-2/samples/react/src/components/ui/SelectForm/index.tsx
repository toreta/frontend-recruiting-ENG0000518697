import { OptionType } from "../../../types/common";
import styles from "./style.module.css";

type Props = React.ComponentPropsWithRef<"select"> & {
  label: string;
  options: Array<OptionType>;
  message?: string;
};

export const SelectForm: React.FC<Props> = ({
  label,
  name,
  value = "",
  options,
  message,
  onChange,
}) => {
  const selectClassName = `${styles.select} ${
    message ? styles.error : styles.default
  } ${value === "" ? styles.selectPlaceholderColor : styles.selectedColor}`;

  return (
    <div>
      <div className={styles.wrapper}>
        <label className={styles.label}>{label}</label>
        <select
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
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};
