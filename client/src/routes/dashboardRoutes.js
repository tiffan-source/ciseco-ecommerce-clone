import Dashboard from "../layouts/dashboard/Dashboard";
import AddNewProduct from "../pages/dashboard/AddNewProduct";
import Analytics from "../pages/dashboard/Analytics";
import ListProduct from "../pages/dashboard/ListProduct";
import UpdateProduct from "../pages/dashboard/UpdateProduct";
import PrivateRoute from "../utils/PrivateRoutes";
import SplitRouter from "./SplitRouter";

const dashboardRoutes = {
  path: "/dashboard",
  element: (
    <PrivateRoute>
      <SplitRouter>
        <Dashboard />
      </SplitRouter>
    </PrivateRoute>
  ),
  children: [
    {
      path: "/dashboard",
      element: <SplitRouter>{<Analytics />}</SplitRouter>,
    },
    {
      path: "add-new-product",
      element: <SplitRouter>{<AddNewProduct />}</SplitRouter>,
    },
    {
      path: "list-product",
      element: <SplitRouter>{<ListProduct />}</SplitRouter>,
    },
    {
      path: "update-product/:pid",
      element: <SplitRouter>{<UpdateProduct />}</SplitRouter>,
    },
  ],
};

export default dashboardRoutes;
