import React, { ReactNode } from "react";

type Props = {
    children: JSX.Element | ReactNode;
    className: string;
};

function Layout(props: Props) {
    const { children, className } = props;

    return <header className={`flex justify-between items-center ${className}`}>{children}</header>;
}

export default Layout;
