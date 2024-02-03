import React from "react";
import { Definition } from "../../types/dictionary-api";
import "./definitionsBlock.css";

type Props = {
    definitions: Definition[];
    className?: string;
};

const DefinitionsBlock = (props: Props) => {
    const { definitions, className } = props;

    return (
        <>
            <h3 className="mb-4 mt-8 text-base text-mid-grey desktop:mb-6 desktop:mt-10 desktop:text-xl">Meaning</h3>
            <ul className="pl-11">
                {definitions.map(({ definition }, index) => (
                    <li key={index} className={`word-definition mt-3 text-midlight-black dark:text-white ${className}`}>
                        {definition}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default DefinitionsBlock;
