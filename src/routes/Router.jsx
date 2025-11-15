import { createBrowserRouter } from "react-router";
import Error from "../pages/Error";
import HomeLayout from "../layouts/HomeLayout";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>
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