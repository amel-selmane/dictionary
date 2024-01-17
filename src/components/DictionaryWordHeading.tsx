import React from "react";
import { DictionaryAPIResponse } from "../types/dictionary-api";

const DictionaryWordHeading = (props: {data: DictionaryAPIResponse}) => {
    const { data } = props;

    return (
        <>
            {data[0].word}
            {data[0].phonetic}

            <div className="audio-container">
                <audio src={data[0].phonetics[0].audio} className=""></audio>
                <button className="play-button">▶️</button>
            </div>
        </>
    );
};

export default DictionaryWordHeading;
