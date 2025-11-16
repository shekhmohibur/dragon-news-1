import { createBrowserRouter } from "react-router";
import Error from "../pages/Error";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../layouts/CategoryNews";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/category/:id",
                element:<CategoryNews></CategoryNews>,
            }
        ]
    },
    {
        path: "/auth",
        element: <h1>Auth layout</h1>
    },
    {
        path: "/news",
        element: <h1>News Layout</h1>
    },
    {
        path: "/*",
        element: <Error />
    }

])
export default Router;