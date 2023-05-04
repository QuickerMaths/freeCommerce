import React, {
  useState,
  useRef,
  useEffect,
  MutableRefObject,
  ChangeEvent,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import { TfiClose } from "react-icons/tfi";
import { useLoginUserMutation } from "../features/api/apiUploadSlice/athorizationApiSlice";
import { useAppDispatch } from "../hooks/reduxHooks";
import { getAuth } from "../features/authSlice/authSlice";
import useToastCreator from "../hooks/useToastCreator";

interface Props {
  isLoginOpen: boolean;
  setLoginOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export type UserLoginProps = {
  identifier: string;
  password: string;
};

const Login: React.FC<Props> = ({ setLoginOpen, isLoginOpen }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [loginUser] = useLoginUserMutation();

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res: any = await loginUser({
        identifier: user,
        password: pwd,
      });

      dispatch(
        getAuth({
          username: user,
          email: res.data.user.email,
          id: res.data.user.id,
        })
      );

      setUser("");
      setPwd("");
      navigate("/panel");
      setLoginOpen(false);
      useToastCreator("Logowanie powiodło się", "success");
    } catch (error: any) {
      if (error.status === 400) {
        setErrMsg("Brakuje hasła lub nazwy uzytkownika");
      } else if (error.status === 401) {
        setErrMsg("Hasło lub nazwa uzywtkownika nieprawidłowe");
      } else if (!error) {
        setErrMsg("Serwer nie odpowiada");
      } else {
        setErrMsg("Hasło lub nazwa uzywtkownika nieprawidłowe");
      }

      errRef.current.focus();
    }
  };

  const userRef = useRef(null) as unknown as MutableRefObject<HTMLInputElement>;
  const errRef = useRef(
    null
  ) as unknown as MutableRefObject<HTMLParagraphElement>;

  const [user, setUser] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const [errMsg, setErrMsg] = useState<string>("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  return (
    <section className={`login ${isLoginOpen ? "login-open" : ""}`}>
      <div className="login__container">
        <button
          className="login__close-button"
          onClick={() => setLoginOpen(false)}
        >
          <TfiClose className="login__close-icon" />
        </button>
        <div className="login__form-wrapper">
          <h2 className="login__title">Logowanie</h2>
          <p
            className={errMsg ? "login__error-message" : "not-visible"}
            aria-live="assertive"
            ref={errRef}
          >
            {errMsg}
          </p>
          <form onSubmit={handleSubmit} className="login__form">
            <div className="login__form-username">
              <label htmlFor="username" className="login__label">
                Nazwa uzytkownika
              </label>
              <input
                ref={userRef}
                autoComplete="off"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setUser(e.target.value)
                }
                id="username"
                type="text"
                className="login__input"
                value={user}
                required
              />
            </div>
            <div className="login__form-password">
              <label htmlFor="password" className="login__label">
                Hasło
              </label>
              <input
                id="password"
                type="password"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPwd(e.target.value)
                }
                className="login__input"
                value={pwd}
                required
              />
            </div>
            <div className="login__form-ua">
              <button type="submit" className="login__submit-button">
                Zaloguj się
              </button>
              <button
                type="button"
                className="login__reset-password-button"
                onClick={() => {
                  navigate("/send-password-reset");
                  setLoginOpen(false);
                }}
              >
                Zapomniałeś hasła?
              </button>
              <Link to="register">
                <button
                  type="button"
                  className="login__register-button"
                  onClick={() => setLoginOpen(false)}
                >
                  Zarejestruj się
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
