import Dashboard from "../layouts/dashboard/Dashboard";
import AddNewProduct from "../pages/dashboard/product/AddNewProduct";
import Analytics from "../pages/dashboard/Analytics";
import UpdateProduct from "../pages/dashboard/product/UpdateProduct";
import PrivateRoute from "../utils/PrivateRoutes";
import SplitRouter from "./SplitRouter";
import ListProduct from "../pages/dashboard/product/ListProduct";
import AddNewCategory from "../pages/dashboard/category/AddNewCategory";
import ListCategory from "../pages/dashboard/category/ListCategory";
import UpdateCategory from "../pages/dashboard/category/UpdateCategory";
import AddNewSubcategory from "../pages/dashboard/subcategory/AddNewSubcategory";
import ListSubcategory from "../pages/dashboard/subcategory/ListSubcategory";
import UpdateSubcategory from "../pages/dashboard/subcategory/UpdateSubcategory";

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
    {
      path: "add-new-category",
      element: <SplitRouter>{<AddNewCategory />}</SplitRouter>,
    },
    {
      path: "list-category",
      element: <SplitRouter>{<ListCategory />}</SplitRouter>,
    },
    {
      path: "update-category/:cid",
      element: <SplitRouter>{<UpdateCategory />}</SplitRouter>,
    },
    {
      path: "add-new-subcategory",
      element: <SplitRouter>{<AddNewSubcategory />}</SplitRouter>,
    },
    {
      path: "list-subcategory",
      element: <SplitRouter>{<ListSubcategory />}</SplitRouter>,
    },
    {
      path: "update-subcategory/:sid",
      element: <SplitRouter>{<UpdateSubcategory />}</SplitRouter>,
    },
  ],
};

export default dashboardRoutes;
