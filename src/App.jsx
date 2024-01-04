import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Services from "./pages/Services";
import About from "./pages/about";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      { path: "/services", element: <Services /> },
      { path: "/about", element: <About /> },
      { path: "/blog", element: <Blog /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
