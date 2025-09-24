import React from "react";
import { Navigate, useLocation} from "react-router-dom";

function PrivetRoute({ Component}) {
    const user_data = JSON.parse(localStorage.getItem("user_data"));
    const location = useLocation();

    if (user_data?.access) {
        return <Component />;
    } else {
        return <Navigate to={{ pathname: "/login", search:`?next=${location.pathname}` }} />;
    }
}

export default PrivetRoute;
