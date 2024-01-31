import React, { ReactNode } from "react";

type Props = {
    children: JSX.Element | ReactNode
}

function Layout(props: Props) {
    const { children } = props;

    return (
        <>
            <p className="mb-6 mt-10 text-mid-grey">Meaning</p>
            <ul className="pl-11">
                { children }
            </ul>
        </>
    )
    
}

export default Layout;
