import React, { PropsWithChildren } from "react";

function Layout({ children, className }: PropsWithChildren<{ className: string }>) {
    return <header className={`flex items-center justify-between ${className}`}>{children}</header>;
}

export default Layout;
