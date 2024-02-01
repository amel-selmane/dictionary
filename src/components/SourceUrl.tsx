import React from "react";
import { DictionaryAPIResponse } from "../types/dictionary-api";
import LinkSourceIcon from "./svg-components/LinkSourceIcon";

type Props = {
    data: DictionaryAPIResponse[];
    className: string;
};

function SourceUrl(props: Props) {
    const { data, className } = props;

    return (
        <p
            className={`text-sm before:mb-5 before:block before:h-px before:bg-midlight-grey before:content-[''] dark:before:bg-dark-grey  ${className}`}
        >
            <span className="mr-5 text-mid-grey underline">Source</span>
            <a href={data[0].sourceUrls[0]} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-x-2">
                <span className="text-midlight-black underline dark:text-white">{data[0].sourceUrls[0]}</span>
                <LinkSourceIcon />
            </a>
        </p>
    );
}

export default SourceUrl;
