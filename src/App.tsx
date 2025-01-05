import { RouterProvider } from "react-router-dom";
import { AuthContextProvider } from "./contexts/authContext";
import { router } from "./routes";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./lib/react-query";
import "./style/theme.css";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
