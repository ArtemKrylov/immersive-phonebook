import * as React from "react";
import * as ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { ColorModeScript } from "@chakra-ui/react";

import App from "./components/App";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    {/* Redux provider */}
    <Provider store={store}>
      {/* for react-persist: local storage handling */}
      <PersistGate loading={null} persistor={persistor}>
        <ColorModeScript />
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
