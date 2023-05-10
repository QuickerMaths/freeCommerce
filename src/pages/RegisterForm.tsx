import React, {
  ChangeEvent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterNewUserMutation } from "../features/api/apiUploadSlice/athorizationApiSlice";
import { getAuth } from "../features/authSlice/authSlice";
import { useAppDispatch } from "../hooks/reduxHooks";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsFillXCircleFill } from "react-icons/bs";

export type UserProps = {
  username: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [registerNewUser, { isLoading }] = useRegisterNewUserMutation();

  const userRef = useRef(null) as unknown as MutableRefObject<HTMLInputElement>;
  const errRef = useRef<HTMLParagraphElement | null>(null);

  const [userData, setUserData] = useState<UserProps>({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const v1 = USER_REGEX.test(userData.username);
    const v2 = PWD_REGEX.test(userData.password);

    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }

    if (!isLoading) {
      try {
        await registerNewUser(userData);

        dispatch(
          getAuth({
            username: null,
            email: userData.email,
            id: null,
          })
        );

        setUserData({
          username: "",
          email: "",
          password: "",
        });
        setMatchPwd("");

        navigate("email-confirmation");
      } catch (error) {
        console.log(error);
      }
    }
  };


  return (
    <section className="register">
      <div className="register__container">
        <div className="register__form-wrapper">
          <h2 className="register__title">Zarejestruj się</h2>

          <p
            ref={errRef}
            aria-live="assertive"
            className={errMsg ? "register__error-message" : "not-visible"}
          >
            {errMsg}
          </p>

          <form onSubmit={handleSubmit} className="register__form">
            <div className="register__form-username">
              <label htmlFor="username" className="register__label">
                Nazwa uzytkownika
                <BsFillCheckCircleFill
                  style={{ color: "green" }}
                  className={validName ? "register__valid" : "hide"}
                />
                <BsFillXCircleFill
                  style={{ color: "red" }}
                  className={
                    validName || !userData.username
                      ? "hide"
                      : "register__invalid"
                  }
                />
              </label>
              <input
                name="username"
                id="username"
                type="text"
                className="register__input"
                required
                value={userData.username}
                ref={userRef}
                autoComplete="off"
                onChange={handleChange}
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />
              <p
                id="uidnote"
                className={
                  userFocus && userData.username && !validName
                    ? "register__uidnote"
                    : "not-visible"
                }
              >
                4 do 24 znaków. <br />
                Musi zaczynać sie literą. <br />
                Litery,liczby i znaki specjalne dozwolone.
              </p>
            </div>
            <div className="register__form-email">
              <label htmlFor="email" className="register__label">
                Email
              </label>
              <input
                name="email"
                id="email"
                type="email"
                value={userData.email}
                onChange={handleChange}
                className="register__input"
                required
              />
            </div>
            <div className="register__form-password">
              <label htmlFor="password" className="register__label">
                Hasło
                <BsFillCheckCircleFill
                  style={{ color: "green" }}
                  className={validPwd ? "register__valid" : "hide"}
                />
                <BsFillXCircleFill
                  style={{ color: "red" }}
                  className={
                    validPwd || !userData.password
                      ? "hide"
                      : "register__invalid"
                  }
                />
              </label>
              <input
                name="password"
                id="password"
                type="password"
                className="register__input"
                required
                value={userData.password}
                onChange={handleChange}
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
              <p
                id="pwdnote"
                className={
                  pwdFocus && !validPwd ? "register__pwdnote" : "not-visible"
                }
              >
                4 do 24 znaków. <br />
                Musi zawierać wielkie i małe litery oraz conajmniej jeden znak
                specjalny. <br />
                Dozwolone znaki specialne:{" "}
                <span aria-label="exclamation mark">!</span>
                <span aria-label="at symbol">@</span>{" "}
                <span aria-label="hashtag">#</span>
                <span aria-label="dollar sign">$</span>{" "}
                <span aria-label="percent">%</span>
              </p>
            </div>
            <div className="register__form-password-confirm">
              <label htmlFor="passwordConfirm" className="register__label">
                Potwierdź hasło
                <BsFillCheckCircleFill
                  style={{ color: "green" }}
                  className={
                    validMatch && matchPwd ? "register__valid" : "hide"
                  }
                />
              </label>
              <input
                id="passwordConfirm"
                type="password"
                className="register__input"
                required
                value={matchPwd}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setMatchPwd(e.target.value)
                }
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
              <p
                id="confirmnote"
                className={
                  !validMatch ? "register__confirmnote" : "not-visible"
                }
              >
                Hasła się nie zgadzają
              </p>
            </div>
            <button
              disabled={!validName || !validPwd || !validMatch ? true : false}
              type="submit"
              className="login__submit-button"
            >
              Załóz konto
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
