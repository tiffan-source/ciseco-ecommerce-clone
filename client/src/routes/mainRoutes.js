import { lazy } from "react";
import SplitRouter from "./SplitRouter";
import Main from "../layouts/main/Main";
import NotFound from "../pages/NotFound";
import Signin from "../pages/main/Signin";
import Signup from "../pages/main/Signup";
import ForgotPassword from "../pages/main/ForgotPassword";
const Home = lazy(() => import("../pages/main/Home"));

const mainRoutes = {
  path: "/",
  element: <Main />,
  children: [
    {
      path: "/",
      element: (
        <SplitRouter>
          <Home />
        </SplitRouter>
      ),
    },
    {
      path: "/sign-in",
      element: (
        <SplitRouter>
          <Signin />
        </SplitRouter>
      ),
    },
    {
      path: "/sign-up",
      element: (
        <SplitRouter>
          <Signup />
        </SplitRouter>
      ),
    },
    {
      path: "/forgot-password",
      element: (
        <SplitRouter>
          <ForgotPassword />
        </SplitRouter>
      ),
    },
    {
      path: "/*",
      element: (
        <SplitRouter>
          <NotFound />
        </SplitRouter>
      ),
    },
  ],
};

export default mainRoutes;
