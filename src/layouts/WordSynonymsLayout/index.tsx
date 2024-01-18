import React, { ReactNode } from "react";

type Props = {
    children: string;
}

function Layout(props: Props) {
    const { children } = props;
    
    return (
        <div>
            {`Synonym(s) ${children}`}
        </div>
    );
}

export default Layout;
