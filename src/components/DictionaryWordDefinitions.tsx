import React from "react";
import { Meaning } from "../types/dictionary-api";
import DictionaryWordType from "./DictionaryWordType";

const DictionaryWordDefinitions = (props: { meanings: Meaning[] }) => {
    const { meanings } = props;

    return meanings.map(({ partOfSpeech, definitions, synonyms }, i) => {
        return (
            <section key={i}>
                <DictionaryWordType wordType={partOfSpeech} />
                <p>Meaning</p>
                <ul>
                    {definitions.map(({ definition }, j) => {
                        return <li key={j}>{definition}</li>;
                    })}
                </ul>
                <span>Synonyms&nbsp;&nbsp;</span>
                <span>{synonyms.map(synonym => synonym + ", ")}</span>
            </section>
        );
    });
};

export default DictionaryWordDefinitions;
