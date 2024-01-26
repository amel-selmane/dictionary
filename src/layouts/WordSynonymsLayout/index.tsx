import React, { ReactNode } from "react";

type Props = {
    children: JSX.Element | ReactNode;
    className?: string;
};

function Layout(props: Props) {
    const { children, className } = props;

    return (
        <p className={`break-all ${className}`}>
            <span className="mr-6 text-mid-grey">Synonym(s)</span>
            <span className="text-custom-purple font-bold">{children}</span>
        </p>
    );
}

export default Layout;
