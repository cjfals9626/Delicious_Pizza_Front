import Home from "./components/pages/home/index";
import Login from "./components/pages/auth/Login";
import Auth from "./components/pages/Auth";
import NotFound from "./components/pages/NotFound";

export const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/auth/login",
        element: <Login />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
];
    