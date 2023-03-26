import { Container } from "@chakra-ui/react";
import AuthForm from "components/AuthForm/AuthForm";
import { useAppSelector } from "hooks/useAppSelector";
import React, { FC, useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";
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
    <Container centerContent pt={3} pb={3}>
      {isLoading ? (
        <ThreeCircles
          color="#1A365D"
          innerCircleColor="#1CD8D2"
          height="200"
          width="200"
          ariaLabel="three-circles-rotating"
        />
      ) : (
        <AuthForm type="login" />
      )}
    </Container>
  );
};

export default LoginPage;
