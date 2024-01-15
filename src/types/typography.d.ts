import { ReactNode } from "react";

export type TypographyProps = {
    tagName: keyof JSX.IntrinsicElements;
    children: string | ReactNode | JSX.Element ;
}