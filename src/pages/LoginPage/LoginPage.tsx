import AuthForm from "components/AuthForm/AuthForm";
import { useAppSelector } from "hooks/useAppSelector";
import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { selectorLoadingAuth, selectorLogged } from "redux/auth/selectorsAuth";

const LoginPage: FC = () => {
  const isLoading: boolean = useAppSelector(selectorLoadingAuth);
  const isLogged: boolean = Boolean(useAppSelector(selectorLogged));
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      navigate("/contacts", { replace: true });
    }
  }, [isLogged, navigate]);

  return (
    <>
      LoginPage
      <AuthForm type="login" />
    </>
  );
};

export default LoginPage;
