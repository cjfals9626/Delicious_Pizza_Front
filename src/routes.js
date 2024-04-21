import Home from "./components/pages/home/index";
import Login from "./components/pages/auth/Login";
import SignUp from "./components/pages/auth/Signup";
import PizzaOrder from "./components/pages/order/PizzaOrder";
import CheckPassword from "./components/pages/privateInfo/CheckPassword";
import UpdateUserInfo from "./components/pages/privateInfo/UpdateUserInfo";
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
        path: "/order/pizza",
        element: <PizzaOrder />,
    },
    {
        path: "/p-info/check-password",
        element: <CheckPassword />,
    },
    {
        path: "/p-info/updateUserInfo",
        element: <UpdateUserInfo />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
];