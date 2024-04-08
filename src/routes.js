import Main from "./components/pages/Main";
import Auth from "./components/pages/Auth";
import NotFound from "./components/pages/NotFound";

export const routes = [
    {
        path: "/",
        element: <Main />,
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
    