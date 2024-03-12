import { Navigate, createBrowserRouter } from "react-router-dom";
import { About } from "../pages/About/About";
import { Houses } from "../pages/Houses/Houses";
import Product from "../pages/Product/Product";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/houses" />,
  },
  {
    path: "/houses",
    element: <Houses />,
  },
  {
    path: "/houses/:slug",
    element: <Product />,
  },
  { path: "/about", element: <About /> },
]);
