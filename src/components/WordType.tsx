import React from "react";

// Maybe it's better to just use a Typography component with tagName=h2 and these classNames ?
function WordType(props: { wordType: string }) {
    return (
        <h2 className="flex flex-row items-center gap-x-8 text-2xl font-bold italic leading-none after:h-px after:w-full after:bg-midlight-grey after:content-[''] dark:text-white dark:after:bg-dark-grey">
            {props.wordType}
        </h2>
    );
}

export default WordType;
