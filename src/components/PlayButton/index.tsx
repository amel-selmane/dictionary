import { MouseEventHandler } from "react";
import PlayButtonIcon from "../svg-components/PlayButtonIcon";

function PlayButton({ onClick }: { onClick: MouseEventHandler<HTMLButtonElement> }) {
    return (
        <button
            type="button"
            title="Listen to word pronunciation"
            className="play-button active:scale-95 active:transition-transform active:duration-100"
            onClick={onClick}
        >
            <PlayButtonIcon svgClassName={"size-12 desktop:size-[75px]"} />
        </button>
    );
}

export default PlayButton;
