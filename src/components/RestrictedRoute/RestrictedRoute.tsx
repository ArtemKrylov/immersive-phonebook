import { useAppSelector } from "hooks/useAppSelector";
import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { selectorLogged } from "redux/auth/selectorsAuth";

interface RestrictedRouteInterface {
  redirectTo: string;
  Component: ReactElement<any, any> | null;
}

const RestrictedRoute: React.FC<RestrictedRouteInterface> = ({
  redirectTo,
  Component,
}) => {
  const isLogged: boolean = Boolean(useAppSelector(selectorLogged));
  return isLogged ? <Navigate to={redirectTo} /> : Component;
};
export default RestrictedRoute;
