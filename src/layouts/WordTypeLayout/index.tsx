import React, { ReactNode } from "react";

type Props = {
    children: JSX.Element | ReactNode;
    className?: string;
};

function Layout(props: Props) {
    const { children, className } = props;

    return <div className={className}>{children}</div>;
}

export default Layout;
