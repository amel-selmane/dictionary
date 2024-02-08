import { useRef } from "react";
import { DictionaryAPIResponse } from "../../types/dictionary-api";
import PlayButton from "../PlayButton";

type PlayerProps = {
    data: DictionaryAPIResponse[];
};

function Player({ data }: PlayerProps) {
    const audioPlayer = useRef(null);

    return (
        data[0].phonetics[0]?.audio && (
            <div>
                <audio src={data[0].phonetics[0]?.audio} ref={audioPlayer}></audio>
                <PlayButton onClick={() => audioPlayer.current?.play()} />
            </div>
        )
    );
}

export default Player;