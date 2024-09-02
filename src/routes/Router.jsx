import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Shared/Error/Error";
import AllCraftItems from "../Pages/AllCraftItems/AllCraftItems";
import AddCraftItems from "../Pages/AddCraftItems/AddCraftItems";
import MyCraftList from "../Pages/MyCraftList/MyCraftList";
import Login from "../Pages/Login/Login";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-craft-items",
        element: <AllCraftItems />,
      },
      {
        path: "/add-craft-items",
        element: <AddCraftItems />,
      },
      {
        path: "/my-craft-list",
        element: <MyCraftList />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
