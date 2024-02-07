import React, { useRef } from "react";
import { DictionaryAPIResponse } from "../../types/dictionary-api";
import PlayButtonIcon from "../svg-components/PlayButtonIcon";

type PlayButtonProps = {
    data: DictionaryAPIResponse[];
};

function PlayButton(props: PlayButtonProps) {
    const { data } = props;
    const audioPlayer = useRef();

    return (
        data[0].phonetics[0]?.audio && (
            <div>
                <audio src={data[0].phonetics[0]?.audio} ref={audioPlayer}></audio>
                <button
                    type="button"
                    title="Listen to word pronunciation"
                    className="play-button active:scale-95 active:transition-transform active:duration-100"
                    onClick={() => (audioPlayer.current as HTMLAudioElement).play()}
                >
                    <PlayButtonIcon svgClassName={"size-12 desktop:size-[75px]"} />
                </button>
            </div>
        )
    );
}

export default PlayButton;
