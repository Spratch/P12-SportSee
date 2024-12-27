import "./layout.scss";
import { Outlet } from "react-router-dom";
import SideNav from "../SideNav";
import TopNav from "../TopNav";

export default function Layout() {
  return (
    <div className="layout">
      <TopNav />
      <SideNav />
      <div className="page-wrapper">
        <Outlet />
      </div>
    </div>
  );
}
