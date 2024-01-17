import React from "react";
import DictionnaryWordType from "../../components/DictionnaryWordType";

type Props = {
    children: JSX.Element | ChildNode
}

function Layout(props: Props) {
    return (
        <DictionnaryWordType wordType={""} />
    );
}

export default Layout;
