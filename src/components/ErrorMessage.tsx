import React from "react";
import Typography from "./Typography";
import { ErrorData } from "../types/dictionary-api";

function ErrorMessage(props: {errorData: ErrorData}) {
    const { title, message, resolution } = props.errorData;

    return (
        <>
            <Typography tagName={"p"} className="">
                😕
            </Typography>
            <Typography tagName={"h1"} className="">
                {title}
            </Typography>
            <Typography tagName={"p"} className="">
                {message + " " + resolution}
            </Typography>
        </>
    );
}

export default ErrorMessage;
