import { Outlet } from "react-router-dom";
import { NavBar } from "./components/navbar/navbar";

export function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
