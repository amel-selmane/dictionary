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
            className={`before:content-[''] before:block before:h-px before:bg-midlight-grey before:mb-5 text-sm text-midlight-black ${className}`}
        >
            <span className="text-mid-grey underline">Source</span>&nbsp;:&nbsp;
            <a href={data[0].sourceUrls[0]} target="_blank" rel="noopener noreferrer" className="inline-flex gap-x-2 items-center">
                <span className="underline">{data[0].sourceUrls[0]}</span>
                <LinkSourceIcon />
            </a>
        </p>
    );
}

export default SourceUrl;
