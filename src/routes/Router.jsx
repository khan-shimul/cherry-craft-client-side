import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Shared/Error/Error";
import AllCraftItems from "../Pages/AllCraftItems/AllCraftItems";
import AddCraftItems from "../Pages/AddCraftItems/AddCraftItems";
import MyCraftList from "../Pages/MyCraftList/MyCraftList";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ProtectRoute from "./ProtectRoute";
import CraftItemDetails from "../Pages/CraftItemDetails/CraftItemDetails";
import CraftItemUpdate from "../Pages/MyCraftList/CraftItemUpdate";
import SubCategoryItems from "../Pages/Home/CraftSubCategories/SubCategoryItems";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://cheer-craft-server.vercel.app/craft-items"),
      },
      {
        path: "/craft-item/:id",
        element: (
          <ProtectRoute>
            <CraftItemDetails />
          </ProtectRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://cheer-craft-server.vercel.app/craft-item/${params.id}`
          ),
      },
      {
        path: "/all-craft-items",
        loader: () =>
          fetch("https://cheer-craft-server.vercel.app/craft-items"),
        element: <AllCraftItems />,
      },
      {
        path: "/add-craft-items",
        element: (
          <ProtectRoute>
            <AddCraftItems />
          </ProtectRoute>
        ),
      },
      {
        path: "/my-craft-list",
        loader: () =>
          fetch("https://cheer-craft-server.vercel.app/craft-items"),
        element: (
          <ProtectRoute>
            <MyCraftList />
          </ProtectRoute>
        ),
      },
      {
        path: "/craft-item-update/:id",
        element: (
          <ProtectRoute>
            <CraftItemUpdate />
          </ProtectRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://cheer-craft-server.vercel.app/craft-item/${params.id}`
          ),
      },
      {
        path: "/craft-item/sub-categories/:name",
        element: (
          <ProtectRoute>
            <SubCategoryItems />
          </ProtectRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://cheer-craft-server.vercel.app/sub-categories/${params.name}`
          ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
