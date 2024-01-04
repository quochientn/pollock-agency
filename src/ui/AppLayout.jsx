import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

import Header from "./Header";

function AppLayout() {
  return (
    <Container maxWidth="lg">
      <Header />

      <main>
        <Outlet />
      </main>

      <div>footer</div>
    </Container>
  );
}

export default AppLayout;
