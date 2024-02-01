import React from "react";
import { DictionaryAPIResponse } from "../types/dictionary-api";
import Typography from "./Typography";
import PlayButton from "./PlayButton";

const WordHeading = (props: { data: DictionaryAPIResponse[] }) => {
    const { data } = props;

    return (
        <>
            <div className="flex flex-col gap-y-1">
                <Typography tagName="h1" className="text-[32px] font-bold leading-none text-midlight-black dark:text-white desktop:text-[64px]">
                    <dfn>{data[0].word}</dfn>
                </Typography>
                <Typography tagName="span" className="text-lg text-custom-purple desktop:text-2xl">
                    {data[0].phonetic}
                </Typography>
            </div>

            <PlayButton data={data} />
        </>
    );
};

export default WordHeading;
