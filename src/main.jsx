import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routes from "../src/routes/Routes";
import { RouterProvider } from "react-router-dom";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Routes} />
  </React.StrictMode>
);
