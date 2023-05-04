import React, { useState } from "react";
import { useSendEmailConfirmationMutation } from "../features/api/apiUploadSlice/athorizationApiSlice";
import { useAppSelector } from "../hooks/reduxHooks";
import useToastCreator from "../hooks/useToastCreator";
import { RootState } from "../redux/store";

const RegisterEmialConfirmation = () => {
  const email = useAppSelector((state: RootState) => state.authSlice.email);
  const [sendEmailConfirmation] = useSendEmailConfirmationMutation();

  const [resend, setResend] = useState<boolean>(false);

  const handleConfirmation = async (email: string) => {
    try {
      await sendEmailConfirmation(email);
      useToastCreator("success", "Wysłano wiadomość");
      setResend(true);
      setTimeout(() => {
        setResend(false);
      }, 30000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="register">
      <div className="register__container">
        <div className="register__email-confirmation">
          <p className="register__success-title">
            Zarejestrowano pomyślnie, aby móc korzystac ze swojego konta,
            przejdź na podanego miala i potwierdź go w wiadomości którą do
            Ciebie wysłaliśmy
          </p>
          <button
            disabled={resend}
            className="register__email-resend"
            onClick={() => handleConfirmation(email as string)}
          >
            {resend
              ? "Wysłano, poczekaj 30 sekund zanim wyślesz ponownie"
              : "Wyślij ponownie"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default RegisterEmialConfirmation;
