"use client"
import React, {useState} from 'react';
import Modal from "../Shared/Modal/index";

import cs from "classnames";
import {cl} from "../../classes/global";

const SignInForm = () => {
    const [nameValue, setNameValue] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className={cs(cl.container)}>
            <Modal content={
                <form className="w-full max-w-sm">
                    <div className="border-b py-2 mb-4">
                        <input
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="text"
                            placeholder="Name"
                            onChange={(evt) => setNameValue(evt.target.value)}
                            value={nameValue}
                        />
                    </div>
                    <div className="flex items-center border-b border-teal-500 py-2">
                        <input
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(evt) => setPassword(evt.target.value)}
                        />
                    </div>
                    <div className="mt-4">
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
            }
                   isCloseOutside={false}
            />

        </div>
    );
};

export default SignInForm;