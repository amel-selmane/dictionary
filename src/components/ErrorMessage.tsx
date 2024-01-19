import React from "react";
import Typography from "./Typography";
import { ErrorData } from "../types/dictionary-api";

function ErrorMessage(props: {errorData: ErrorData}) {
    const { title, message, resolution } = props.errorData;

    return (
        <div className="mt-[132px] text-center">
            <Typography tagName={"p"} className="text-[64px] leading-none">
                😕
            </Typography>
            <Typography tagName={"h1"} className="text-midlight-black font-bold text-xl mt-11">
                {title}
            </Typography>
            <Typography tagName={"p"} className="text-mid-grey text-lg mt-6">
                {message + " " + resolution}
            </Typography>
        </div>
    );
}

export default ErrorMessage;
