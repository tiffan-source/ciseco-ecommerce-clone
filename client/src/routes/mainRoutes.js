import { lazy } from "react";
import SplitRouter from "./SplitRouter";
import Main from "../layouts/main/Main";
import NotFound from "../pages/NotFound";
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
