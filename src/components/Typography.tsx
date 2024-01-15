import React from "react";
import { TypographyProps } from "../types/typography";

const Typography = (props: TypographyProps) => <props.tagName>{props.children}</props.tagName>;

export default Typography;
