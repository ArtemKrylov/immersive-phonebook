import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import { selectorLoadingAuth, selectorLogged } from "redux/auth/selectorsAuth";

import { useAppSelector } from "hooks/useAppSelector";
import AuthForm from "components/AuthForm/AuthForm";
import Loader from "components/Loader/Loader";

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
    <Container>
      {isLoading ? <Loader /> : <AuthForm type="register" />}
    </Container>
  );
};

export default RegisterPage;
