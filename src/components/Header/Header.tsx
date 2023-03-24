import React from "react";
import { userLogout } from "redux/auth/operationsAuth";
import { selectorAuth } from "redux/auth/selectorsAuth";

import { useAppSelector } from "hooks/useAppSelector";

import Navigation from "components/Navigation/Navigation";
import { useAppDispatch } from "hooks/useAppDispatch";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(selectorAuth);
  const {
    user: { name },
    token,
  } = auth;

  function onLogoutBtnClick(): void {
    if (!token) return;
    dispatch<any>(userLogout(token));
  }

  return (
    <div>
      <Navigation />
      {token && <p>Hello {name}!</p>}
      {token && <button onClick={onLogoutBtnClick}>Logout</button>}
    </div>
  );
};

export default Header;
