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
            <span className="font-bold text-custom-purple">{children}</span>
        </p>
    );
}

export default Layout;
