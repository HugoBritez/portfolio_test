import * as React from "react";
import {createRoot} from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter
} from "react-router-dom";
import "./index.css";
import App from "./App";

const container = document.getElementById('root');
const root = createRoot(container);



root.render(
  <BrowserRouter>
    <App></App>
  </BrowserRouter>,
)