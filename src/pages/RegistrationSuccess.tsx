import React from "react";
import { useNavigate } from "react-router-dom";

const RegistrationSuccess = () => {
  const navigate = useNavigate();

  return (
    <section className="register">
      <div className="register__container">
        <div className="register__email-confirmation">
          <p className="register__success-title">
            Wszytko przebiegło pomyślnie! Gratulujemy, teraz mozesz korzystać ze
            swojego konta!
          </p>
          <button
            className="register__email-resend"
            onClick={() => navigate("/")}
          >
            Przejdź do strony głównej
          </button>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSuccess;
