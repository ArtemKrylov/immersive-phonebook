import React from "react";

import { selectorLoadingAuth } from "redux/auth/selectorsAuth";
import { useAppSelector } from "hooks/useAppSelector";
import AuthForm from "components/AuthForm/AuthForm";
import Loader from "components/Loader/Loader";
import ContainerComp from "components/Container/ContainerComp";

const RegisterPage: React.FC = () => {
  const isLoading: boolean = useAppSelector(selectorLoadingAuth);

  return (
    <ContainerComp>
      {isLoading ? <Loader /> : <AuthForm type="register" />}
    </ContainerComp>
  );
};

export default RegisterPage;
