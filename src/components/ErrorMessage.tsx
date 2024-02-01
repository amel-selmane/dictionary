import React from "react";
import Typography from "./Typography";
import { ErrorData } from "../types/dictionary-api";

function ErrorMessage(props: { errorData: ErrorData }) {
    const { title, message, resolution } = props.errorData;

    return (
        <div className="mt-[132px] text-center">
            <Typography tagName={"p"} className="text-[64px] leading-none">
                😕
            </Typography>
            <Typography tagName={"h1"} className="mt-11 text-xl font-bold text-midlight-black">
                {title}
            </Typography>
            <Typography tagName={"p"} className="mt-6 text-lg text-mid-grey">
                {message + " " + resolution}
            </Typography>
        </div>
    );
}

export default ErrorMessage;
