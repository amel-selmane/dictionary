import React, { ReactNode } from "react";

type TypographyProps = {
    tagName: keyof JSX.IntrinsicElements;
    className: string;
    children: string | JSX.Element | ReactNode;
}

const Typography = (props: TypographyProps) => (
    <props.tagName className={props.className || null}>
        {props.children}
    </props.tagName>
);

export default Typography;
