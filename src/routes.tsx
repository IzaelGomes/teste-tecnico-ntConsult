import { createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/login/indes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);
