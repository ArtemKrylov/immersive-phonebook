import { Container } from "@chakra-ui/react";
import AuthForm from "components/AuthForm/AuthForm";
import Loader from "components/Loader/Loader";
import { useAppSelector } from "hooks/useAppSelector";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { selectorLoadingAuth, selectorLogged } from "redux/auth/selectorsAuth";

const LoginPage: React.FC = () => {
  const isLoading: boolean = useAppSelector(selectorLoadingAuth);
  const isLogged: boolean = Boolean(useAppSelector(selectorLogged));
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      navigate("/contacts", { replace: true });
    }
  }, [isLogged, navigate]);

  return (
    <Container centerContent pt={3} pb={3}>
      {isLoading ? <Loader /> : <AuthForm type="login" />}
    </Container>
  );
};

export default LoginPage;
