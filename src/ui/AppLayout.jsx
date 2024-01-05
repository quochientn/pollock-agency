import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

import Header from "./Header";

function AppLayout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <div>footer</div>
    </>
  );
}

export default AppLayout;
