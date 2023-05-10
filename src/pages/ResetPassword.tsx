import React, {
  ChangeEvent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { BsFillCheckCircleFill, BsFillXCircleFill } from "react-icons/bs";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useChangeUserPasswordMutation } from "../features/api/apiUploadSlice/athorizationApiSlice";
import useToastCreator from "../hooks/useToastCreator";

export type ResetPasswordData = {
  password: string;
  passwordConfirmation: string;
  code: string;
};

const ResetPassword = () => {
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const passRef = useRef(null) as unknown as MutableRefObject<HTMLInputElement>;
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const [changeUserPassword, { isLoading, isSuccess, isError }] =
    useChangeUserPasswordMutation();

  const handleResetPasswordSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await changeUserPassword(resetData);

      useToastCreator(
        "Password changed successfully, you can login",
        "success"
      );
      navigate("../", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setResetData({ ...resetData, [e.target.name]: e.target.value });
  };

  const [resetData, setResetData] = useState<ResetPasswordData>({
    password: "",
    passwordConfirmation: "",
    code: searchParams.get("code") as string,
  });

  const [validPwd, setaValidPwd] = useState<boolean>(false);
  const [validMatch, setaValidMatch] = useState<boolean>(false);

  const [pwdFocus, setPwdFocus] = useState<boolean>(false);
  const [matchFocus, setMatchFocus] = useState<boolean>(false);

  useEffect(() => {
    passRef.current.focus();
  }, []);

  useEffect(() => {
    setaValidPwd(PWD_REGEX.test(resetData.password));
    setaValidMatch(resetData.password === resetData.passwordConfirmation);
  }, [resetData.password, resetData.passwordConfirmation]);

  let content;

  if (isError) {
    content = (
      <p className="reset__error">
        Something went wrong, please try again later.
      </p>
    );
  } else {
    content = (
      <div className="reset__form-wrapper">
        <h2 className="reset__title">Set new password</h2>
        <form onSubmit={handleResetPasswordSubmit} className="reset__form">
          <div className="reset__form-email">
            <label htmlFor="password" className="register__label">
              Password
              <BsFillCheckCircleFill
                style={{ color: "green" }}
                className={validPwd ? "register__valid" : "hide"}
              />
              <BsFillXCircleFill
                style={{ color: "red" }}
                className={validPwd ? "hide" : "register__invalid"}
              />
            </label>
            <input
              name="password"
              id="password"
              type="password"
              required
              value={resetData.password}
              onChange={handleChange}
              ref={passRef}
              className="reset__input"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p
              id="pwdnote"
              className={
                pwdFocus && !validPwd ? "register__pwdnote" : "not-visible"
              }
            >
              4 do 24 signs. <br />
              Has to contain capital letter and at least one special sign <br />
              Allowed special signs:{" "}
              <span aria-label="exclamation mark">!</span>
              <span aria-label="at symbol">@</span>{" "}
              <span aria-label="hashtag">#</span>
              <span aria-label="dollar sign">$</span>{" "}
              <span aria-label="percent">%</span>
            </p>
          </div>
          <div className="reset__form-email">
            <label htmlFor="passwordConfirm" className="register__label">
              Confirm password
              <BsFillCheckCircleFill
                style={{ color: "green" }}
                className={validMatch ? "register__valid" : "hide"}
              />
            </label>
            <input
              name="passwordConfirmation"
              id="passwordConfirmation"
              type="password"
              required
              value={resetData.passwordConfirmation}
              onChange={handleChange}
              className="reset__input"
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
          </div>
          <p
            id="confirmnote"
            className={!validMatch ? "register__confirmnote" : "not-visible"}
          >
            Passwords must match.
          </p>
          <button
            type="submit"
            className="reset__submit-button"
            disabled={!validPwd || !validMatch ? true : false}
          >
            {isLoading ? "Loading" : "Set new password"}
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

export default ResetPassword;
