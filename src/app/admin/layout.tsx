import React from "react";

function Admin({
                   children,
               }: {
    children: React.ReactNode
}) {

    return <>
        {children}
    </>
}

export default Admin;