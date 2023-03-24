import { useAppDispatch } from "hooks/useAppDispatch";
import React, { FC } from "react";
import { userLogin, userSignUp } from "redux/auth/operationsAuth";

interface AuthFormInterface {
  type: "register" | "login";
}

const AuthForm: FC<AuthFormInterface> = ({ type }) => {
  // const token: string | null = useAppSelector((state) => state.auth.token);
  const dispatch = useAppDispatch();
  const isRegisterForm: boolean = type === "register" ? true : false;

  function handleAuthSubmit(event: any) {
    event.preventDefault();
    const form = event.currentTarget;
    const email: string = form.elements.email.value;
    const password: string = form.elements.password.value;
    switch (type) {
      case "register": {
        dispatch<any>(
          userSignUp({ name: form.elements?.name.value, email, password })
        );
        break;
      }
      case "login": {
        dispatch<any>(userLogin({ email, password }));
        break;
      }
      default:
        throw new Error("wrong auth type value");
    }
    form.reset();
  }

  return (
    <>
      <h2 className="auth__heading">{isRegisterForm ? "Sign up" : "Login"}</h2>
      <form onSubmit={handleAuthSubmit} className="auth__form">
        {isRegisterForm && (
          <label className="auth__label">
            <p className="auth__label-text">Name</p>
            <input
              name="name"
              type={"text"}
              required
              autoFocus
              placeholder="Enter your name"
              className="auth__input"
            />
          </label>
        )}
        <label className="auth__label">
          <p className="auth__label-text">Email</p>
          <input
            name="email"
            type={"email"}
            required
            autoFocus
            placeholder="Enter your email"
            className="auth__input"
          />
        </label>
        <label className="auth__label">
          <p className="auth__label-text">Password</p>
          <input
            name="password"
            type={"password"}
            required
            placeholder="Enter your password"
            className="auth__input"
          />
        </label>
        <button type="submit" className="auth__submit-btn">
          {isRegisterForm ? "Sign up" : "Login"}
        </button>
      </form>
    </>
  );
};

export default AuthForm;
