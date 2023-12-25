import { OptionType } from "../../../types/common";
import styles from "./style.module.css";

type Props = React.ComponentPropsWithRef<"select"> & {
  label: string;
  options: Array<OptionType>;
};

export const SelectForm: React.FC<Props> = ({ label, name, options }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      <select className={styles.select} name={name} id="">
        <>
          <option selected disabled>
            選択してください
          </option>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </>
      </select>
    </div>
  );
};
