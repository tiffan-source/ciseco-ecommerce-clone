import Dashboard from "../layouts/dashboard/Dashboard";
import AddNewProduct from "../pages/dashboard/AddNewProduct";
import Analytics from "../pages/dashboard/Analytics";
import PrivateRoute from "../utils/PrivateRoutes";

const dashboardRoutes = {
  path: "/dashboard",
  element: (
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  ),
  children: [
    {
      path: "/dashboard",
      element: <Analytics />,
    },
    {
      path: "add-new-product",
      element: <AddNewProduct />,
    },
  ],
};

export default dashboardRoutes;
