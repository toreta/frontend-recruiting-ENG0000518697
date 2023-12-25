import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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

const validationSchema = z.object({
  name: z.string().min(1, "氏名を入力してください"),
  email: z.string().min(1, "メールアドレスを入力してください"),
  zip: z.string().min(1, "郵便番号を入力してください"),
  prefecture: z.string().min(1, "都道府県を選択してください"),
  address1: z.string().min(1, "市区町村・番地を入力してください"),
  address2: z.string().optional(),
});

export const UserFormTemplate = () => {
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      zip: "",
      prefecture: "",
      address1: "",
      address2: "",
    },
    resolver: zodResolver(validationSchema),
  });

  const isValidFormat = (emailValue: string, zipValue: string) => {
    let isValidError = false;
    // メールアドレスのフォーマットチェック
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      setError("email", {
        message: "正しいメールアドレスを入力してください",
      });
      isValidError = true;
    }

    // 郵便番号のフォーマットチェック
    if (zipValue.length !== 7) {
      setError("zip", {
        message: "7桁の半角数字で入力してください",
      });
      isValidError = true;
    }
    if (!/^[0-9]+$/.test(zipValue)) {
      setError("zip", {
        message: "ハイフンを含めずに半角数字で入力してください。",
      });
      isValidError = true;
    }
    return isValidError;
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (isValidFormat(data.email, data.zip)) return;

    try {
      console.log("=== request data ===");
      console.log(data);
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
