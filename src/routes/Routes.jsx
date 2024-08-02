import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Register from "../pages/Register";
import PageLayout from "../components/Layout/PageLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageLayout>
        <Home />
      </PageLayout>
    ),
  },
  {
    path: "/Home",
    element: (
      <PageLayout>
        <Home />
      </PageLayout>
    ),
  },
  {
    path: "/About",
    element: (
      <PageLayout>
        <About />
      </PageLayout>
    ),
  },
  {
    path: "/Register",
    element: (
      <PageLayout>
        <Register />
      </PageLayout>
    ),
  },
]);

export default router;
