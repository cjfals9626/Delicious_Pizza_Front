import { useState } from "react";
import CheckPassword from "./CheckPassword";
import UpdateUserInfo from "./UpdateUserInfo";

const PrivateInfo = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <>
            {isAuthenticated ? <UpdateUserInfo /> : <CheckPassword setIsAuthenticated={setIsAuthenticated} />}
        </>
    );
};

export default PrivateInfo;