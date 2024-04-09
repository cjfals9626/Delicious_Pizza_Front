import Home from "./components/pages/home/index";
import Auth from "./components/pages/Auth";
import NotFound from "./components/pages/NotFound";

export const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/auth",
        element: <Auth />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
];
    