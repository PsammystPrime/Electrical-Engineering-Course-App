import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Courses from "./Courses.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Certificate, { Maths, Module1 } from "./cert.jsx";
// import { Analytics } from "@vercel/analytics/react";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "courses", element: <Courses /> },
  { path: "courses/certificate", element: <Certificate /> },
  { path: "courses/certificate/mod1", element: <Module1 /> },
  { path: "courses/certificate/mod2", element: <Module1 /> },
  { path: "courses/certificate/mod1/maths", element: <Maths /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
