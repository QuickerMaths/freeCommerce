import React, { ChangeEvent, useState } from "react";
import { useForgotUserPasswordMutation } from "../features/api/apiUploadSlice/athorizationApiSlice";

const SendResetPassword = () => {
  const [resetUserPassword, { isSuccess, isError, isLoading }] =
    useForgotUserPasswordMutation();

  const [emailPwdReset, setEmailPwdReset] = useState<string>("");
  const [resend, setResend] = useState<boolean>(false);

  const handleResetPasswordSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await resetUserPassword(emailPwdReset);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const resendLink = async (emailPwdReset: string) => {
    try {
      await resetUserPassword(emailPwdReset);
      setResend(true);
      setTimeout(() => {
        setResend(false);
      }, 30000);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  let content;

  if (isSuccess) {
    content = (
      <>
        <p className="reset__success">
          Link do resetowania hasła został wysłany na podany adres email
        </p>
        <button
          disabled={resend}
          onClick={() => resendLink(emailPwdReset)}
          className="reset__submit-button"
        >
          {resend
            ? "Wysłano, poczekaj 30 sekund zanim wyślesz link ponownie"
            : "Wyślij ponownie"}
        </button>
      </>
    );
  } else if (isError) {
    <p className="reset__error">
      Coś poszło nie tak, spróbuj ponownie później
    </p>;
  } else {
    content = (
      <div className="reset__form-wrapper">
        <h2 className="reset__title">Zresetuj hasło</h2>
        <form onSubmit={handleResetPasswordSubmit} className="reset__form">
          <div className="reset__form-email">
            <label htmlFor="email" className="reset__label">
              Email
            </label>
            <input
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmailPwdReset(e.target.value)
              }
              id="email"
              type="email"
              className="reset__input"
            />
          </div>
          <button
            type="submit"
            className="reset__submit-button"
            disabled={emailPwdReset === "" ? true : false}
          >
            {isLoading ? "Wysyłanie" : "Wyślij link"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <section className="reset">
      <div className="reset__container">{content}</div>
    </section>
  );
};

export default SendResetPassword;
