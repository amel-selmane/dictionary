import React, { forwardRef } from "react";
import { DictionaryAPIResponse } from "../types/dictionary-api";
import Player from "./Player";

type Props = {
    data: DictionaryAPIResponse[];
};

const WordHeading = forwardRef<HTMLHeadingElement, Props>(({ data }, ref) => {
    return (
        <>
            <div className="flex flex-col gap-y-1">
                <h1
                    className="text-[32px] font-bold leading-none text-midlight-black dark:text-white desktop:text-[64px]"
                    tabIndex={-1}
                    ref={ref}
                >
                    <dfn>{data[0].word}</dfn>
                </h1>
                <span className="text-lg text-custom-purple desktop:text-2xl">{data[0].phonetic}</span>
            </div>

            <Player data={data} />
        </>
    );
});

export default WordHeading;
