import { Box } from "@chakra-ui/react";
import Header from "components/Header/Header";
import Loader from "components/Loader/Loader";
import React, { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";

const SharedLayout: FC = () => {
  return (
    <Box className="app" minH={"100vh"} display="flex" flexDir={"column"}>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default SharedLayout;
