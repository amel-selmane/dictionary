import React from "react";
import { DictionaryAPIResponse } from "../types/dictionary-api";
// import goToSourceLogo from "./GoToSourceLogo.svg";

type Props = {
    data: DictionaryAPIResponse[];
    className: string;
};

function SourceUrl(props: Props) {
    const { data, className } = props;

    return (
        <p className={`before:content-[''] before:block before:h-px before:bg-midlight-grey before:mb-5 text-sm text-midlight-black ${className}`}>
            <span className="text-mid-grey underline">Source</span> : <span className="underline">{data[0].sourceUrls}</span>
            {/* <a href={data[0].sourceUrls[0]}>
                <goToSourceLogo />
            </a> */}
        </p>
    );
}

export default SourceUrl;
