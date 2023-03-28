import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { selectorLoadingAuth, selectorLogged } from "redux/auth/selectorsAuth";

import { useAppSelector } from "hooks/useAppSelector";
import AuthForm from "components/AuthForm/AuthForm";
import Loader from "components/Loader/Loader";
import ContainerComp from "components/Container/ContainerComp";

const RegisterPage: React.FC = () => {
  const isLoading: boolean = useAppSelector(selectorLoadingAuth);
  const isLogged: boolean = Boolean(useAppSelector(selectorLogged));
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      navigate("/contacts", { replace: true });
    }
  }, [isLogged, navigate]);

  return (
    <ContainerComp>
      {isLoading ? <Loader /> : <AuthForm type="register" />}
    </ContainerComp>
  );
};

export default RegisterPage;
