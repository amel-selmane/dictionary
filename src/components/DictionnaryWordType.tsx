import React from "react";

type Props = {
    wordType: string;
}

function DictionnaryWordType(props: Props) {
    return (
        <div className="flex items-center gap-x-8">
            <h2 className="text-light-black">{props.wordType}</h2>
            <hr className="bg-verylight-grey w-full h-px" />
        </div>
    );
}

export default DictionnaryWordType;
