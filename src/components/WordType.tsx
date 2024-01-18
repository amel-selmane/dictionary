import React from "react";

// Maybe it's better to just use a Typography component with tagName=h2 and these classNames ?
function WordType(props: { wordType: string }) {
    return (
        <h2 className="text-light-black font-bold text-2xl leading-none italic flex flex-row items-center gap-x-8 after:content-[''] after:bg-midlight-grey after:w-full after:h-px">
            {props.wordType}
        </h2>
    );
}

export default WordType;
