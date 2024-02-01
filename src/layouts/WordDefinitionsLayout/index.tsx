import React, { ReactNode } from "react";

type Props = {
    children: JSX.Element | ReactNode
}

function Layout(props: Props) {
    const { children } = props;

    return (
        <>
            <p className="mb-4 mt-8 text-base text-mid-grey desktop:mb-6 desktop:mt-10 desktop:text-xl">Meaning</p>
            <ul className="pl-11">
                { children }
            </ul>
        </>
    )
    
}

export default Layout;
