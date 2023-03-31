import React from "react";

import AuthForm from "components/AuthForm/AuthForm";
import ContainerComp from "components/Container/ContainerComp";
import Loader from "components/Loader/Loader";
import { useAppSelector } from "hooks/useAppSelector";
import { selectorLoadingAuth } from "redux/auth/selectorsAuth";

const LoginPage: React.FC = () => {
  const isLoading: boolean = useAppSelector(selectorLoadingAuth);

  return (
    <ContainerComp>
      {isLoading ? <Loader /> : <AuthForm type="login" />}
    </ContainerComp>
  );
};

export default LoginPage;
