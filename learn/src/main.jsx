import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Courses from "./Courses.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Certificate from "./cert.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "courses", element: <Courses /> },
  { path: "courses/certificate", element: <Certificate /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
