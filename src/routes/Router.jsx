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

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/craft-items"),
      },
      {
        path: "/craft-item/:id",
        element: (
          <ProtectRoute>
            <CraftItemDetails />
          </ProtectRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/craft-item/${params.id}`),
      },
      {
        path: "/all-craft-items",
        loader: () => fetch("http://localhost:5000/craft-items"),
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
        element: (
          <ProtectRoute>
            <MyCraftList />
          </ProtectRoute>
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
