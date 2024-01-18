import React from "react";
import { DictionaryAPIResponse } from "../types/dictionary-api";
import Typography from "./Typography";

const WordHeading = (props: { data: DictionaryAPIResponse[] }) => {
    const { data } = props;

    return (
        <>
            <div className="flex flex-col gap-y-2">
                <Typography tagName="h1" className="text-[64px] font-bold leading-none color-midlight-black">
                    <dfn>{data[0].word}</dfn>
                </Typography>
                <Typography tagName="span" className="text-custom-purple">
                    {data[0].phonetic}
                </Typography>
            </div>

            <div>
                <audio src={data[0].phonetics[0].audio} className=""></audio>
                <button className="play-button">▶️</button>
            </div>
        </>
    );
};

export default WordHeading;
