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
      useToastCreator("success", "Message sent successfully");
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
            Registration process completed successfully! Please check your email
            for confirmation.
          </p>
          <button
            disabled={resend}
            className="register__email-resend"
            onClick={() => handleConfirmation(email as string)}
          >
            {resend ? "Wait 30 secons to send again" : "Send again"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default RegisterEmialConfirmation;
