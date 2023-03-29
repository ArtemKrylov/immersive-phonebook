import React, { lazy, useEffect } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";

import { useAppSelector } from "hooks/useAppSelector";
import { selectorAuth } from "redux/auth/selectorsAuth";
import { useAppDispatch } from "hooks/useAppDispatch";

//layoutes and pages lazy loading
import SharedLayout from "layouts/SharedLayout/SharedLayout";
import { theme } from "chakra/theme";
import { userUpdate } from "redux/auth/operationsAuth";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "components/RestrictedRoute/RestrictedRoute";
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
      <Route
        path="register"
        element={
          <RestrictedRoute
            redirectTo="/contacts"
            Component={<RegisterPage />}
          />
        }
      />
      <Route
        path="login"
        element={
          <RestrictedRoute redirectTo="/contacts" Component={<LoginPage />} />
        }
      />
      <Route
        path="contacts"
        element={
          <PrivateRoute redirectTo="/login" Component={<ContactsPage />} />
        }
      />
      <Route path="*" element={<NoMatchPage />} />
    </Route>
  ),
  { basename }
);

const App: React.FC = () => {
  const { token } = useAppSelector(selectorAuth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token) {
      dispatch<any>(userUpdate(token));
    }
  }, [token, dispatch]);

  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />

      <div>
        <Toaster />
      </div>
    </ChakraProvider>
  );
};
export default App;
