import { Outlet } from "react-router-dom";
import "./style.css";
import { Header } from "./header/header";
import { useEffect } from "react";

export const Layout = () => {
  useEffect(() => {
    const user = localStorage.getItem("auth");
    if (!user) window.location.href = "/";
  }, []);

  return (
    <div className="layout">
      <Header />
      <div className="layout__content">
        <Outlet />
      </div>
    </div>
  );
};
