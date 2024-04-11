import Home from "./components/pages/home/index";
import Login from "./components/pages/auth/Login";
import SignUp from "./components/pages/auth/Signup";
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
        path: "/auth/signup",
        element: <SignUp />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
];