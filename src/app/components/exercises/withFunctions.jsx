import React from "react";
import Card from "../common/Card";

const withFunctions = (Component) => () => {
    const isAuth = !!localStorage.getItem("auth");
    const onLogin = () => localStorage.setItem("auth", "token");
    const onLogout = () => localStorage.removeItem("auth");

    return (
        <Card>
            <Component {...{ isAuth, onLogin, onLogout }} />
        </Card>
    );
};

export default withFunctions;
