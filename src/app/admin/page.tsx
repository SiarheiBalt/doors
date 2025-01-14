"use client"
import React from 'react';
import cs from "classnames";
import {cl} from "../../classes/global";
import SignInForm from "../../components/SignInForm/index";
import FileLoader from "../../components/FileLoader/index";

const Admin = () => {
    const isAuth = true;

    if(!isAuth) {
        return <SignInForm />
    }

    const onFileLoad = (file) => {
        console.log(file);
    }

    return (
        <div className={cs(cl.container, "pt-8")}>
            <div className={cl.title}>Admin page</div>
            <div className={cl.subTitle + " mt-4"}>Add doors</div>

            <FileLoader onFileLoad={onFileLoad}
                        isSaveActive={false}
                        handleSaveAs={() => {
                        }}
            />
        </div>
    );
};

export default Admin;