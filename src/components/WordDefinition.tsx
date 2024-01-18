import React from "react";

type Props = {
    definition: string;
    className?: string;
}

const WordDefinition = (props: Props) => {
    const { definition, className } = props;

    return <li className={className}>{definition}</li>;
};

export default WordDefinition;
