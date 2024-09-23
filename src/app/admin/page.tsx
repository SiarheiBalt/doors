import React from 'react';

import cs from "classnames";
import {cl} from "../../classes/global";
import SignInForm from "../../components/SignInForm/index";

const Admin = () => {
    const isAuth = false;

    if(!isAuth) {
        return <SignInForm />
    }

    return (
        <div className={cs(cl.container, "pt-8")}>
           Admin page
        </div>
    );
};

export default Admin;