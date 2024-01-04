import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <div>header</div>

      <main>
        <Outlet />
      </main>

      <div>footer</div>
    </>
  );
}

export default AppLayout;
