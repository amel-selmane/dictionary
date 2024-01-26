import React from "react";
import { DictionaryAPIResponse } from "../types/dictionary-api";
import PlayButtonIcon from "./svg-components/PlayButtonIcon";

type PlayButtonProps = {
    data: DictionaryAPIResponse[];
};

function PlayButton(props: PlayButtonProps) {
    const { data } = props;

    return (
        <div>
            <audio src={data[0].phonetics[0]?.audio}></audio>
            <button className="active:scale-95 active:transition-transform active:duration-100">
                <PlayButtonIcon />
            </button>
        </div>
    );
}

export default PlayButton;
