import { render, cleanup, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
      // 建物名・号室を入力
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
      // 建物名・号室を入力
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
      // 建物名・号室を入力
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
      // 建物名・号室を入力
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
      // 建物名・号室を入力
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
      // 建物名・号室を入力
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
      // 建物名・号室を入力
      const address2Input = screen.getByRole("user-form-input-address2");
      userEvent.type(address2Input, "1-1-1");

      // ボタンが活性
      await waitFor(() =>
        expect(screen.getByRole("user-form-button")).toBeEnabled()
      );

      // 氏名を未入力に変更
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
      // 建物名・号室を入力
      const address2Input = screen.getByRole("user-form-input-address2");
      userEvent.type(address2Input, "1-1-1");

      // ボタンが活性
      await waitFor(() =>
        expect(screen.getByRole("user-form-button")).toBeEnabled()
      );

      // メールアドレスを未入力に変更
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
      // 建物名・号室を入力
      const address2Input = screen.getByRole("user-form-input-address2");
      userEvent.type(address2Input, "1-1-1");

      // ボタンが活性
      await waitFor(() =>
        expect(screen.getByRole("user-form-button")).toBeEnabled()
      );

      // 郵便番号を未入力に変更
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
      // 建物名・号室を入力
      const address2Input = screen.getByRole("user-form-input-address2");
      userEvent.type(address2Input, "1-1-1");

      // ボタンが活性
      await waitFor(() =>
        expect(screen.getByRole("user-form-button")).toBeEnabled()
      );

      // 市区町村を未入力に変更
      userEvent.clear(address1Input);
      await waitFor(() =>
        expect(
          screen.getByRole("user-form-input-address1-message")
        ).toHaveTextContent("市区町村・番地を入力してください")
      );
    });
    it("建物名・号室が未入力の場合、エラーメッセージが表示されること", async () => {
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
      // 建物名・号室を入力
      const address2Input = screen.getByRole("user-form-input-address2");
      userEvent.type(address2Input, "1-1-1");

      // ボタンが活性
      await waitFor(() =>
        expect(screen.getByRole("user-form-button")).toBeEnabled()
      );

      // 建物名・号室を未入力に変更
      userEvent.clear(address2Input);
      await waitFor(() =>
        expect(
          screen.queryByRole("user-form-input-address2-message")
        ).not.toBeInTheDocument()
      );
    });
  });

  describe("フォーマットバリデーションチェック", () => {
    describe("ボタンをクリックした際に、Eメールのフォーマットチェックが実行されること", () => {
      afterAll(cleanup);
      it("Eメールが正しいフォーマットの場合、エラーメッセージが表示されないこと", async () => {
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

        // メールアドレスの値を変更
        userEvent.clear(emailInput);
        userEvent.type(emailInput, "test2@test.com");

        // ボタンクリック前はエラーメッセージは表示されない
        await waitFor(() =>
          expect(
            screen.queryByRole("user-form-input-zip-message")
          ).not.toBeInTheDocument()
        );

        // ボタンクリック
        userEvent.click(screen.getByRole("user-form-button"));

        // ボタンクリックしてもエラーメッセージは表示されない
        await waitFor(() =>
          expect(
            screen.queryByRole("user-form-input-email-message")
          ).not.toBeInTheDocument()
        );
      });
      it("Eメールが正しいフォーマットでない場合、Eメールのフォーマットチェックが失敗すること (エラーメッセージが表示されること)", async () => {
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

        // メールアドレスを不正なフォーマットに変更
        userEvent.clear(emailInput);
        userEvent.type(emailInput, "test2test.com");

        userEvent.click(screen.getByRole("user-form-button"));

        // ボタンクリック前はエラーメッセージは表示されない
        await waitFor(() =>
          expect(
            screen.queryByRole("user-form-input-zip-message")
          ).not.toBeInTheDocument()
        );

        // ボタンクリック
        await waitFor(() =>
          expect(
            screen.queryByRole("user-form-input-email-message")
          ).toHaveTextContent("正しいメールアドレスを入力してください")
        );
      });
    });

    describe("ボタンをクリックした際に、郵便番号のフォーマットチェックが実行されること", () => {
      afterAll(cleanup);
      it("郵便番号が正常なフォーマットの場合、エラーメッセージが表示されないこと", async () => {
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

        // 郵便番号の値を変更
        userEvent.clear(zipInput);
        userEvent.type(zipInput, "9876543");

        // ボタンクリック前はエラーメッセージは表示されない
        await waitFor(() =>
          expect(
            screen.queryByRole("user-form-input-zip-message")
          ).not.toBeInTheDocument()
        );

        // ボタンクリック
        userEvent.click(screen.getByRole("user-form-button"));

        // ボタンクリックしてもエラーメッセージは表示されない
        await waitFor(() =>
          expect(
            screen.queryByRole("user-form-input-zip-message")
          ).not.toBeInTheDocument()
        );
      });
      it("郵便番号が7桁以外の場合、郵便番号のフォーマットチェックが失敗すること (エラーメッセージが表示されること)", async () => {
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

        // 郵便番号を不正なフォーマットに変更
        userEvent.clear(zipInput);
        userEvent.type(zipInput, "98765432");

        // ボタンクリック前はエラーメッセージは表示されない
        await waitFor(() =>
          expect(
            screen.queryByRole("user-form-input-zip-message")
          ).not.toBeInTheDocument()
        );

        // ボタンクリック
        userEvent.click(screen.getByRole("user-form-button"));

        await waitFor(() =>
          expect(
            screen.queryByRole("user-form-input-zip-message")
          ).toHaveTextContent("7桁の半角数字で入力してください")
        );
      });
      it("郵便番号にハイフンが含まれている場合、郵便番号のフォーマットチェックが失敗すること (エラーメッセージが表示されること)", async () => {
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

        // 郵便番号を不正なフォーマットに変更
        userEvent.clear(zipInput);
        userEvent.type(zipInput, "987-654");

        // ボタンクリック前はエラーメッセージは表示されない
        await waitFor(() =>
          expect(
            screen.queryByRole("user-form-input-zip-message")
          ).not.toBeInTheDocument()
        );

        // ボタンクリック
        userEvent.click(screen.getByRole("user-form-button"));

        await waitFor(() =>
          expect(
            screen.queryByRole("user-form-input-zip-message")
          ).toHaveTextContent("ハイフンを含めずに半角数字で入力してください")
        );
      });
    });
  });
});
