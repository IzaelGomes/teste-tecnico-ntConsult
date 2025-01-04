import { Outlet } from "react-router-dom";
import "./style.css";
import { Header } from "./header/header";

export const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <div className="layout__content">
        <Outlet />
      </div>
    </div>
  );
};
