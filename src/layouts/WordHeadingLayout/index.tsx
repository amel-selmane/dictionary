import React, { ReactNode } from "react";

type Props = {
    children: JSX.Element | ReactNode;
    className: string;
};

function Layout(props: Props) {
    const { children, className } = props;

    return <header className={`flex items-center justify-between ${className}`}>{children}</header>;
}

export default Layout;
