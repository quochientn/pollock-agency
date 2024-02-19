import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

function AppLayout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
        <BackToTop />
      </main>

      <Footer />
    </>
  );
}

export default AppLayout;
