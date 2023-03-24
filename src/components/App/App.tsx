import React, { FC, lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// import { GlobalStyle } from "../GlobalStyle";
import {
  ChakraProvider,
  // Box,
  // Text,
  // Link,
  // VStack,
  // Code,
  // Grid,
  theme,
} from "@chakra-ui/react";

// import { ColorModeSwitcher } from "./../../ColorModeSwitcher";
// import { Logo } from "./../../Logo";
import SharedLayout from "components/SharedLayout/SharedLayout";
import { Toaster } from "react-hot-toast";
import { useAppSelector } from "hooks/useAppSelector";
import { selectorAuth } from "redux/auth/selectorsAuth";
import { useAppDispatch } from "hooks/useAppDispatch";
import { deleteToken } from "redux/auth/sliceAuth";

const HomePage: FC = lazy(() => import("pages/HomePage/HomePage"));
const RegisterPage: FC = lazy(() => import("pages/RegisterPage/RegisterPage"));
const LoginPage: FC = lazy(() => import("pages/LoginPage/LoginPage"));
const ContactsPage: FC = lazy(() => import("pages/ContactsPage/ContactsPage"));

const App: FC = () => {
  // const contacts = useSelector(selectContacts);
  // console.log("contacts: ", contacts);
  // const dispatch = useAppDispatch();
  const { token } = useAppSelector(selectorAuth);
  const dispatch = useAppDispatch();

  //delete token from localStorage and state while first app launch
  useEffect(() => {
    if (token) {
      dispatch(deleteToken(token));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   const user: User = {
  //     name: "sdf",
  //     email: "gdsf",
  //     password: "sdfs",
  //   };
  //   dispatch<any>(userSignUp(user));
  // }, [dispatch]);
  return (
    // <div className="app">
    //   <GlobalStyle />
    // </div>
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
      {/* <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box> */}
      <div>
        <Toaster />
      </div>
    </ChakraProvider>
  );
};
export default App;
