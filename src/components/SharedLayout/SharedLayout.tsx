import Header from "components/Header/Header";
import React, { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";

const SharedLayout: FC = () => {
  return (
    <div>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
