import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default AppLayout;
