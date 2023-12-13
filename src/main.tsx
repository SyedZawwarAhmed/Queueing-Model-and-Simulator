import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Priority from "./pages/Priority/index.tsx";
import Simulator from "./pages/Simulator/index.tsx";
import QueueingModel from "./pages/QueueingModel/index.tsx";
import App from "./App.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/priority",
    element: <Priority />,
  },
  {
    path: "/simulator",
    element: <Simulator />,
  },
  {
    path: "/priority",
    element: <QueueingModel />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
