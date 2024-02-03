import React from "react";
import { ErrorData } from "../types/dictionary-api";

function ErrorMessage(props: { errorData: ErrorData }) {
    const { title, message, resolution } = props.errorData;

    return (
        <div className="mt-[132px] text-center">
            <p className="text-[64px] leading-none">
                😕
            </p>
            <h1 className="mt-11 text-xl font-bold text-midlight-black dark:text-white">
                {title}
            </h1>
            <p  className="mt-6 text-lg text-mid-grey">
                {message + " " + resolution}
            </p>
        </div>
    );
}

export default ErrorMessage;
