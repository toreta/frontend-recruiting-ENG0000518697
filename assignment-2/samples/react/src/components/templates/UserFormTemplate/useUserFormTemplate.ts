import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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

export const useUserFormTemplate = () => {
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

  return {
    handleSubmit,
    control,
    errors,
    isValid,
    onSubmit,
  };
};
