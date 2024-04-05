import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import { loader as loaderMenu } from "./features/menu/Menu";

const route = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: loaderMenu,
      },
      { path: "/cart", element: <Cart /> },
      { path: "/order", element: <Order /> },
      { path: "/order/new", element: <CreateOrder /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={route} />;
};

export default App;
