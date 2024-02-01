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
            className={`before:content-[''] before:block before:h-px before:bg-midlight-grey dark:before:bg-dark-grey before:mb-5 text-sm  ${className}`}
        >
            <span className="text-mid-grey underline mr-5">Source</span>
            <a href={data[0].sourceUrls[0]} target="_blank" rel="noopener noreferrer" className="inline-flex gap-x-2 items-center">
                <span className="text-midlight-black dark:text-white underline">{data[0].sourceUrls[0]}</span>
                <LinkSourceIcon />
            </a>
        </p>
    );
}

export default SourceUrl;
