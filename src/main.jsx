import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Root from "./components/Root/Root.jsx";
import Home from "../src/pages/Home/Home.jsx"
import AppoinmentList from "./pages/Home/AppoinmentList/AppoinmentList.jsx";
import Movies from "./pages/Movies/Movies.jsx";
import TaskTwo from "./pages/TaskTwo/TaskTwo.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/appoinment",
        element: <AppoinmentList></AppoinmentList>,
      },
      {
        path: "/movies",
        element: <Movies></Movies>,
      },
      {
        path: "/task2",
        element: <TaskTwo></TaskTwo>,
      },
    ],
  },
]);
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
