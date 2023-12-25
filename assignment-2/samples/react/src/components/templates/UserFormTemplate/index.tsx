import { useForm, Controller, SubmitHandler } from "react-hook-form";

import { InputForm } from "../../ui/InputForm";
import { SelectForm } from "../../ui/SelectForm";
import { ActionButton } from "../../ui/ActionButton";
import { PrefectureOptions } from "../../../constants/option";

import styles from "./style.module.css";

type Inputs = {
  name: string;
  email: string;
  zip: string;
  prefecture: string;
  address1: string;
  address2?: string;
};

export const UserFormTemplate = () => {
  const { handleSubmit, control } = useForm<Inputs>({
    defaultValues: {
      name: "",
      email: "",
      zip: "",
      prefecture: "",
      address1: "",
      address2: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    try {
      const response = await fetch("https://httpstat.us/201 ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

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
              type="email"
              placeholder="(例)yoyaku@toreta.in"
              onChange={onChange}
              value={value}
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
        <ActionButton name="登録" />
      </div>
    </form>
  );
};
