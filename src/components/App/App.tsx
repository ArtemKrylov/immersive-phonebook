import React, { lazy, useEffect } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
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
import { Toaster } from "react-hot-toast";

import { useAppSelector } from "hooks/useAppSelector";
import { selectorAuth } from "redux/auth/selectorsAuth";
import { useAppDispatch } from "hooks/useAppDispatch";
import { deleteToken } from "redux/auth/sliceAuth";

//layoutes and pages lazy loading
import SharedLayout from "layouts/SharedLayout/SharedLayout";
const HomePage: React.FC = lazy(() => import("pages/HomePage/HomePage"));
const RegisterPage: React.FC = lazy(
  () => import("pages/RegisterPage/RegisterPage")
);
const LoginPage: React.FC = lazy(() => import("pages/LoginPage/LoginPage"));
const ContactsPage: React.FC = lazy(
  () => import("pages/ContactsPage/ContactsPage")
);
const NoMatchPage: React.FC = lazy(
  () => import("pages/NoMatchPage/NoMatchPage")
);

//basename for react-router
const basename = "/goit-react-hw-08-phonebook";

//router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<HomePage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="contacts" element={<ContactsPage />} />
      <Route path="*" element={<NoMatchPage />} />
    </Route>
  ),
  { basename }
);

const App: React.FC = () => {
  const { token } = useAppSelector(selectorAuth);
  const dispatch = useAppDispatch();

  //delete token from localStorage and state while first app launch
  useEffect(() => {
    if (token) {
      dispatch(deleteToken(token));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
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
