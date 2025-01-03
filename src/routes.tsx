import { createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/login";
import { Dragons } from "./pages/dragons";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dragons",
    element: <Dragons />,
  },
]);
