"use client"
import React from 'react';
import cs from "classnames";
import {cl} from "../../classes/global";
import SignInForm from "../../components/SignInForm/index";
import AddDoorForm from "../../components/Forms/AddDoorForm/index";

const Admin = () => {
    const isAuth = true;

    if(!isAuth) {
        return <SignInForm />
    }

    return (
        <div className={cs(cl.container, "pt-8")}>
            <div className={cl.title}>Admin page</div>
            <div className={cl.subTitle + " mt-4"}>Добавить дверь</div>

            <AddDoorForm />
        </div>
    );
};

export default Admin;