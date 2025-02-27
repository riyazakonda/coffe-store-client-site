import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import SignIn from "../SignIn/SignIn";
import Register from "../Ragister/Register";
import Layout from "../Layout/Layout";
import Users from "../components/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Main></Main>,
        loader: () => fetch("http://localhost:5000/coffee"),
      },
      {
        path: "addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: "login",
        element: <SignIn></SignIn>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "users",
        element: <Users></Users>,
        loader: () => fetch("http://localhost:5000/users"),
      },
    ],
  },
]);
export default router;
