import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { ApiProvider } from "@reduxjs/toolkit/query/react";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import api from "./api";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <ApiProvider api={api}>
      <App />
    </ApiProvider>
  </BrowserRouter>
);
