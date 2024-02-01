import React from "react";
import "./wordDefinition.css";

type Props = {
    definition: string;
    className?: string;
};

const WordDefinition = (props: Props) => {
    const { definition, className } = props;

    return <li className={`word-definition text-midlight-black dark:text-white ${className}`}>{definition}</li>;
};

export default WordDefinition;
