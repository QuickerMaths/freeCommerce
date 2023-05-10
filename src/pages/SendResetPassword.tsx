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
          Link to reset your password was sent to your email
        </p>
        <button
          disabled={resend}
          onClick={() => resendLink(emailPwdReset)}
          className="reset__submit-button"
        >
          {resend
            ? "Waint 30 second before you resend your link again"
            : "Send again"}
        </button>
      </>
    );
  } else if (isError) {
    <p className="reset__error">
      Something went wrong, please try again later
    </p>;
  } else {
    content = (
      <div className="reset__form-wrapper">
        <h2 className="reset__title">Reset password</h2>
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
            {isLoading ? "Sending" : "Send link"}
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
