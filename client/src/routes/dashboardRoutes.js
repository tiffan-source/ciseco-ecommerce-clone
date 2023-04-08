import Dashboard from "../layouts/dashboard/Dashboard";
import AddNewProduct from "../pages/dashboard/AddNewProduct";
import Analytics from "../pages/dashboard/Analytics";

const dashboardRoutes = {
  path: "/dashboard",
  element: <Dashboard />,
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
