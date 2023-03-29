import React, { ReactElement } from "react";
import { selectorLoadingAuth, selectorLogged } from "redux/auth/selectorsAuth";

import { useAppSelector } from "hooks/useAppSelector";
import { Navigate } from "react-router-dom";

interface PrivateRouteInterface {
  redirectTo: string;
  Component: ReactElement<any, any> | null;
}

const PrivateRoute: React.FC<PrivateRouteInterface> = ({
  redirectTo,
  Component,
}) => {
  const isLogged: boolean = Boolean(useAppSelector(selectorLogged));
  const isLoading: boolean = useAppSelector(selectorLoadingAuth);
  const shouldRedirect: boolean = !isLogged && !isLoading;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
