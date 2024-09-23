"use client"
import React from 'react';

import cs from "classnames";
import {cl} from "../../classes/global";
import Modal from "../Shared/Modal/index";

const SignInForm = () => {


    return (
        <div className={cs(cl.container, "pt-8")}>
            <Modal content={
                <form className="w-full max-w-sm">
                    <div className="flex items-center border-b border-teal-500 py-2">
                        <input
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="text"
                            placeholder="Name"
                            aria-label="Full name"
                        />
                        <button
                            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                            type="button">
                            Sign In
                        </button>
                        <button
                            className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
                            type="button">
                            Cancel
                        </button>
                    </div>
                </form>
            } />

        </div>
    );
};

export default SignInForm;