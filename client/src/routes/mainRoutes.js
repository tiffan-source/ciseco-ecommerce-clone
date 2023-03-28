import { lazy } from "react";
import SplitRouter from "./SplitRouter";
import Main from "../layouts/main/Main";
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
  ],
};

export default mainRoutes;
