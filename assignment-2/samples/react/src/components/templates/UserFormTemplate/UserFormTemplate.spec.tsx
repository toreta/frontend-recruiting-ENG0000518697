import { render, cleanup, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// import { act } from "react-dom/test-utils";
import { UserFormTemplate } from "./index";

describe("UserFormTemplate test", () => {
  afterAll(cleanup);

  describe("ボタン活性チェック", () => {
    afterEach(cleanup);
    it("全てのフォームを入力した場合、ボタンが活性になること", async () => {
      render(<UserFormTemplate />);
      // 未入力時、ボタンが非活性
      const button = screen.getByRole("user-form-button");
      expect(button).toBeDisabled();
      // 氏名を入力
      const nameInput = screen.getByRole("user-form-input-name");
      userEvent.type(nameInput, "テスト太郎");
      // Eメールを入力
      const emailInput = screen.getByRole("user-form-input-email");
      userEvent.type(emailInput, "test@test.com");
      // 郵便番号を入力
      const zipInput = screen.getByRole("user-form-input-zip");
      userEvent.type(zipInput, "1234567");
      // 都道府県を選択
      const prefectureSelect = screen.getByLabelText("都道府県");
      userEvent.selectOptions(prefectureSelect, "東京都");
      // 市区町村を入力
      const address1Input = screen.getByRole("user-form-input-address1");
      userEvent.type(address1Input, "渋谷区");
      // 住所を入力
      const address2Input = screen.getByRole("user-form-input-address2");
      userEvent.type(address2Input, "1-1-1");

      // ボタンが活性
      await waitFor(() =>
        expect(screen.getByRole("user-form-button")).toBeEnabled()
      );
    });

    it("氏名が未入力の場合、ボタンが非活性になること", async () => {
      render(<UserFormTemplate />);
      // 未入力時、ボタンが非活性
      const button = screen.getByRole("user-form-button");
      expect(button).toBeDisabled();
      // Eメールを入力
      const emailInput = screen.getByRole("user-form-input-email");
      userEvent.type(emailInput, "test@test.com");
      // 郵便番号を入力
      const zipInput = screen.getByRole("user-form-input-zip");
      userEvent.type(zipInput, "1234567");
      // 都道府県を選択
      const prefectureSelect = screen.getByLabelText("都道府県");
      userEvent.selectOptions(prefectureSelect, "東京都");
      // 市区町村を入力
      const address1Input = screen.getByRole("user-form-input-address1");
      userEvent.type(address1Input, "渋谷区");
      // 住所を入力
      const address2Input = screen.getByRole("user-form-input-address2");
      userEvent.type(address2Input, "1-1-1");

      // ボタンが非活性
      await waitFor(() =>
        expect(screen.getByRole("user-form-button")).toBeDisabled()
      );
    });
    it("Eメールが未入力の場合、ボタンが非活性になること", async () => {
      render(<UserFormTemplate />);
      // 未入力時、ボタンが非活性
      const button = screen.getByRole("user-form-button");
      expect(button).toBeDisabled();
      // 氏名を入力
      const nameInput = screen.getByRole("user-form-input-name");
      userEvent.type(nameInput, "テスト太郎");
      // 郵便番号を入力
      const zipInput = screen.getByRole("user-form-input-zip");
      userEvent.type(zipInput, "1234567");
      // 都道府県を選択
      const prefectureSelect = screen.getByLabelText("都道府県");
      userEvent.selectOptions(prefectureSelect, "東京都");
      // 市区町村を入力
      const address1Input = screen.getByRole("user-form-input-address1");
      userEvent.type(address1Input, "渋谷区");
      // 住所を入力
      const address2Input = screen.getByRole("user-form-input-address2");
      userEvent.type(address2Input, "1-1-1");

      // ボタンが非活性
      await waitFor(() =>
        expect(screen.getByRole("user-form-button")).toBeDisabled()
      );
    });
    it("郵便番号が未入力の場合、ボタンが非活性になること", async () => {
      render(<UserFormTemplate />);
      // 未入力時、ボタンが非活性
      const button = screen.getByRole("user-form-button");
      expect(button).toBeDisabled();
      // 氏名を入力
      const nameInput = screen.getByRole("user-form-input-name");
      userEvent.type(nameInput, "テスト太郎");
      // Eメールを入力
      const emailInput = screen.getByRole("user-form-input-email");
      userEvent.type(emailInput, "test@test.com");
      // 都道府県を選択
      const prefectureSelect = screen.getByLabelText("都道府県");
      userEvent.selectOptions(prefectureSelect, "東京都");
      // 市区町村を入力
      const address1Input = screen.getByRole("user-form-input-address1");
      userEvent.type(address1Input, "渋谷区");
      // 住所を入力
      const address2Input = screen.getByRole("user-form-input-address2");
      userEvent.type(address2Input, "1-1-1");

      // ボタンが非活性
      await waitFor(() =>
        expect(screen.getByRole("user-form-button")).toBeDisabled()
      );
    });
    it("都道府県が未選択の場合、ボタンが非活性になること", async () => {
      render(<UserFormTemplate />);
      // 未入力時、ボタンが非活性
      const button = screen.getByRole("user-form-button");
      expect(button).toBeDisabled();
      // 氏名を入力
      const nameInput = screen.getByRole("user-form-input-name");
      userEvent.type(nameInput, "テスト太郎");
      // Eメールを入力
      const emailInput = screen.getByRole("user-form-input-email");
      userEvent.type(emailInput, "test@test.com");
      // 郵便番号を入力
      const zipInput = screen.getByRole("user-form-input-zip");
      userEvent.type(zipInput, "1234567");
      // 市区町村を入力
      const address1Input = screen.getByRole("user-form-input-address1");
      userEvent.type(address1Input, "渋谷区");
      // 住所を入力
      const address2Input = screen.getByRole("user-form-input-address2");
      userEvent.type(address2Input, "1-1-1");

      // ボタンが非活性
      await waitFor(() =>
        expect(screen.getByRole("user-form-button")).toBeDisabled()
      );
    });
    it("市区町村が未入力の場合、ボタンが非活性になること", async () => {
      render(<UserFormTemplate />);
      // 未入力時、ボタンが非活性
      const button = screen.getByRole("user-form-button");
      expect(button).toBeDisabled();
      // 氏名を入力
      const nameInput = screen.getByRole("user-form-input-name");
      userEvent.type(nameInput, "テスト太郎");
      // Eメールを入力
      const emailInput = screen.getByRole("user-form-input-email");
      userEvent.type(emailInput, "test@test.com");
      // 郵便番号を入力
      const zipInput = screen.getByRole("user-form-input-zip");
      userEvent.type(zipInput, "1234567");
      // 都道府県を選択
      const prefectureSelect = screen.getByLabelText("都道府県");
      userEvent.selectOptions(prefectureSelect, "東京都");
      // 住所を入力
      const address2Input = screen.getByRole("user-form-input-address2");
      userEvent.type(address2Input, "1-1-1");

      // ボタンが非活性
      await waitFor(() =>
        expect(screen.getByRole("user-form-button")).toBeDisabled()
      );
    });
    it("住所の建物・号室が未入力の場合でも、ボタンが活性になること", async () => {
      render(<UserFormTemplate />);
      // 未入力時、ボタンが非活性
      const button = screen.getByRole("user-form-button");
      expect(button).toBeDisabled();
      // 氏名を入力
      const nameInput = screen.getByRole("user-form-input-name");
      userEvent.type(nameInput, "テスト太郎");
      // Eメールを入力
      const emailInput = screen.getByRole("user-form-input-email");
      userEvent.type(emailInput, "test@test.com");
      // 郵便番号を入力
      const zipInput = screen.getByRole("user-form-input-zip");
      userEvent.type(zipInput, "1234567");
      // 都道府県を選択
      const prefectureSelect = screen.getByLabelText("都道府県");
      userEvent.selectOptions(prefectureSelect, "東京都");
      // 市区町村を入力
      const address1Input = screen.getByRole("user-form-input-address1");
      userEvent.type(address1Input, "渋谷区");

      // ボタンが活性
      await waitFor(() =>
        expect(screen.getByRole("user-form-button")).toBeEnabled()
      );
    });
  });

  describe("必須入力のバリデーションチェック", () => {
    afterAll(cleanup);
    it("氏名が未入力の場合、エラーメッセージが表示されること", async () => {
      render(<UserFormTemplate />);
      // 未入力時、ボタンが非活性
      const button = screen.getByRole("user-form-button");
      expect(button).toBeDisabled();
      // 氏名を入力
      const nameInput = screen.getByRole("user-form-input-name");
      userEvent.type(nameInput, "テスト太郎");
      // Eメールを入力
      const emailInput = screen.getByRole("user-form-input-email");
      userEvent.type(emailInput, "test@test.com");
      // 郵便番号を入力
      const zipInput = screen.getByRole("user-form-input-zip");
      userEvent.type(zipInput, "1234567");
      // 都道府県を選択
      const prefectureSelect = screen.getByLabelText("都道府県");
      userEvent.selectOptions(prefectureSelect, "東京都");
      // 市区町村を入力
      const address1Input = screen.getByRole("user-form-input-address1");
      userEvent.type(address1Input, "渋谷区");
      // 住所を入力
      const address2Input = screen.getByRole("user-form-input-address2");
      userEvent.type(address2Input, "1-1-1");

      // ボタンが活性
      await waitFor(() =>
        expect(screen.getByRole("user-form-button")).toBeEnabled()
      );

      userEvent.clear(nameInput);
      await waitFor(() =>
        expect(
          screen.getByRole("user-form-input-name-message")
        ).toHaveTextContent("氏名を入力してください")
      );
    });
    it("Eメールが未入力の場合、エラーメッセージが表示されること", async () => {
      render(<UserFormTemplate />);
      // 未入力時、ボタンが非活性
      const button = screen.getByRole("user-form-button");
      expect(button).toBeDisabled();
      // 氏名を入力
      const nameInput = screen.getByRole("user-form-input-name");
      userEvent.type(nameInput, "テスト太郎");
      // Eメールを入力
      const emailInput = screen.getByRole("user-form-input-email");
      userEvent.type(emailInput, "test@test.com");
      // 郵便番号を入力
      const zipInput = screen.getByRole("user-form-input-zip");
      userEvent.type(zipInput, "1234567");
      // 都道府県を選択
      const prefectureSelect = screen.getByLabelText("都道府県");
      userEvent.selectOptions(prefectureSelect, "東京都");
      // 市区町村を入力
      const address1Input = screen.getByRole("user-form-input-address1");
      userEvent.type(address1Input, "渋谷区");
      // 住所を入力
      const address2Input = screen.getByRole("user-form-input-address2");
      userEvent.type(address2Input, "1-1-1");

      // ボタンが活性
      await waitFor(() =>
        expect(screen.getByRole("user-form-button")).toBeEnabled()
      );

      userEvent.clear(emailInput);
      await waitFor(() =>
        expect(
          screen.getByRole("user-form-input-email-message")
        ).toHaveTextContent("メールアドレスを入力してください")
      );
    });
    it("郵便番号が未入力の場合、エラーメッセージが表示されること", async () => {
      render(<UserFormTemplate />);
      // 未入力時、ボタンが非活性
      const button = screen.getByRole("user-form-button");
      expect(button).toBeDisabled();
      // 氏名を入力
      const nameInput = screen.getByRole("user-form-input-name");
      userEvent.type(nameInput, "テスト太郎");
      // Eメールを入力
      const emailInput = screen.getByRole("user-form-input-email");
      userEvent.type(emailInput, "test@test.com");
      // 郵便番号を入力
      const zipInput = screen.getByRole("user-form-input-zip");
      userEvent.type(zipInput, "1234567");
      // 都道府県を選択
      const prefectureSelect = screen.getByLabelText("都道府県");
      userEvent.selectOptions(prefectureSelect, "東京都");
      // 市区町村を入力
      const address1Input = screen.getByRole("user-form-input-address1");
      userEvent.type(address1Input, "渋谷区");
      // 住所を入力
      const address2Input = screen.getByRole("user-form-input-address2");
      userEvent.type(address2Input, "1-1-1");

      // ボタンが活性
      await waitFor(() =>
        expect(screen.getByRole("user-form-button")).toBeEnabled()
      );

      userEvent.clear(zipInput);
      await waitFor(() =>
        expect(
          screen.getByRole("user-form-input-zip-message")
        ).toHaveTextContent("郵便番号を入力してください")
      );
    });

    it("市区町村が未入力の場合、エラーメッセージが表示されること", async () => {
      render(<UserFormTemplate />);
      // 未入力時、ボタンが非活性
      const button = screen.getByRole("user-form-button");
      expect(button).toBeDisabled();
      // 氏名を入力
      const nameInput = screen.getByRole("user-form-input-name");
      userEvent.type(nameInput, "テスト太郎");
      // Eメールを入力
      const emailInput = screen.getByRole("user-form-input-email");
      userEvent.type(emailInput, "test@test.com");
      // 郵便番号を入力
      const zipInput = screen.getByRole("user-form-input-zip");
      userEvent.type(zipInput, "1234567");
      // 都道府県を選択
      const prefectureSelect = screen.getByLabelText("都道府県");
      userEvent.selectOptions(prefectureSelect, "東京都");
      // 市区町村を入力
      const address1Input = screen.getByRole("user-form-input-address1");
      userEvent.type(address1Input, "渋谷区");
      // 住所を入力
      const address2Input = screen.getByRole("user-form-input-address2");
      userEvent.type(address2Input, "1-1-1");

      // ボタンが活性
      await waitFor(() =>
        expect(screen.getByRole("user-form-button")).toBeEnabled()
      );

      userEvent.clear(address1Input);
      await waitFor(() =>
        expect(
          screen.getByRole("user-form-input-address1-message")
        ).toHaveTextContent("市区町村・番地を入力してください")
      );
    });
  });

  describe("フォーマットバリデーションチェック", () => {
    describe("ボタンをクリックした際に、Eメールのフォーマットチェックが実行されること", () => {
      afterAll(cleanup);
      it("Eメールが正しいフォーマットの場合、エラーメッセージが表示されないこと", () => {});
      it("Eメールが正しいフォーマットでない場合、Eメールのフォーマットチェックが失敗すること (エラーメッセージが表示されること)", () => {});
    });

    describe("ボタンをクリックした際に、郵便番号のフォーマットチェックが実行されること", () => {
      afterAll(cleanup);
      it("郵便番号が7桁の場合、エラーメッセージが表示されないこと", () => {});
      it("郵便番号にハイフンが含まれていない場合、エラーメッセージが表示されないこと", () => {});
      it("郵便番号が7桁以外の場合、郵便番号のフォーマットチェックが失敗すること (エラーメッセージが表示されること)", () => {});
      it("郵便番号にハイフンが含まれている場合、郵便番号のフォーマットチェックが失敗すること (エラーメッセージが表示されること)", () => {});
    });
  });
});
