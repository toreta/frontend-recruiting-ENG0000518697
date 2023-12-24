import { InputForm } from "../../ui/InputForm";
import { ActionButton } from "../../ui/ActionButton";
import styles from "./style.module.css";

export const UserFormTemplate = () => {
  return (
    <form className={styles.wrapper} action="">
      <div className={styles.form}>
        <InputForm name="氏名" type="text" placeholder="(例)トレタ 太郎" />
      </div>
      <div className={styles.form}>
        <InputForm
          name="Eメール"
          type="email"
          placeholder="(例)yoyaku@toreta.in"
        />
      </div>
      <div className={styles.form}>
        <InputForm name="郵便番号" type="text" placeholder="(例)0000000" />
      </div>
      <div className={styles.form}>
        {/* <InputForm name="都道府県" type="text" placeholder="(例)0000000" /> */}
      </div>
      <div className={styles.form}>
        <InputForm
          name="市区町村・番地"
          type="text"
          placeholder="(例)品川区西五反田７丁目２２−１７"
        />
      </div>
      <div>
        <InputForm
          name="建物名・号室"
          type="text"
          placeholder="(例)TOCビル 8F"
        />
      </div>
      <div className={styles.button}>
        <ActionButton name="登録" />
      </div>
    </form>
  );
};
