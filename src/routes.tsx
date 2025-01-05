import { createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/login";
import { Dragons } from "./pages/dragonsList";
import { Layout } from "./components/layout";
import { DragonDetails } from "./pages/dragonDetails";
import { CreateDragon } from "./pages/createDragon";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dragons",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dragons />,
      },
      {
        path: "details/:id",
        element: <DragonDetails />,
      },
      {
        path: "create",
        element: <CreateDragon />,
      },
    ],
  },
]);
