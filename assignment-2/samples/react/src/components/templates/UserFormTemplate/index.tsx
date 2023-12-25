import { Controller } from "react-hook-form";

import { InputForm } from "../../ui/InputForm";
import { SelectForm } from "../../ui/SelectForm";
import { ActionButton } from "../../ui/ActionButton";
import { PrefectureOptions } from "../../../constants/option";
import { useUserFormTemplate } from "./useUserFormTemplate";

import styles from "./style.module.css";

export const UserFormTemplate = () => {
  const { handleSubmit, control, errors, isValid, onSubmit } =
    useUserFormTemplate();

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form}>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <InputForm
              label="氏名"
              type="text"
              placeholder="(例)トレタ 太郎"
              onChange={onChange}
              value={value}
              message={errors.name?.message}
            />
          )}
        />
      </div>
      <div className={styles.form}>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <InputForm
              label="Eメール"
              type="text"
              placeholder="(例)yoyaku@toreta.in"
              onChange={onChange}
              value={value}
              message={errors.email?.message}
            />
          )}
        />
      </div>
      <div className={styles.form}>
        <Controller
          control={control}
          name="zip"
          render={({ field: { onChange, value } }) => (
            <InputForm
              label="郵便番号"
              type="text"
              placeholder="(例)0000000"
              onChange={onChange}
              value={value}
              message={errors.zip?.message}
            />
          )}
        />
      </div>
      <div className={styles.form}>
        <Controller
          control={control}
          name="prefecture"
          render={({ field: { onChange, value } }) => (
            <SelectForm
              label="都道府県"
              name="prefecture"
              options={PrefectureOptions}
              onChange={onChange}
              value={value}
              message={errors.prefecture?.message}
            />
          )}
        />
      </div>
      <div className={styles.form}>
        <Controller
          control={control}
          name="address1"
          render={({ field: { onChange, value } }) => (
            <InputForm
              label="市区町村・番地"
              name="address1"
              type="text"
              placeholder="(例)品川区西五反田７丁目２２−１７"
              onChange={onChange}
              value={value}
              message={errors.address1?.message}
            />
          )}
        />
      </div>
      <div>
        <Controller
          control={control}
          name="address2"
          render={({ field: { onChange, value } }) => (
            <InputForm
              label="建物名・号室"
              name="address2"
              type="text"
              placeholder="(例)TOCビル 8F"
              onChange={onChange}
              value={value}
            />
          )}
        />
      </div>
      <div className={styles.button}>
        <ActionButton type="submit" disabled={!isValid} name="登録" />
      </div>
    </form>
  );
};
