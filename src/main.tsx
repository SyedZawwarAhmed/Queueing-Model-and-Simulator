import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Priority from "./routes/Priority/index.tsx";
import Simulator from "./routes/Simulator/index.tsx";
import SelectSimulationModel from "./routes/SelectSimulationModel/index.tsx";
import QueueingModel from "./routes/QueueingModel/index.tsx";
import App from "./App.tsx";
import SelectQueueingModel from "./routes/SelectQueueingModel/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/select-simulation-model",
    element: <SelectSimulationModel />,
  },
  
  {
    path: "/select-queueing-model",
    element: <SelectQueueingModel />,
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
    path: "/queueing-model",
    element: <QueueingModel />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
