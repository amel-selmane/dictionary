import { useState, FormEvent } from "react";
import { DictionnaryAPIResponse, Meaning, Definition } from "./types/dictionnary-api";

// IMPORT COMPONENTS
import Typography from "./components/Typography";
import DictionnarySearchForm from "./components/DictionnarySearchForm";
import WordClass from "./components/WordClass";

// IMPORT LAYOUTS
import Header from "./layouts/Header/Layout";

const App = () => {
    const [data, setData] = useState<DictionnaryAPIResponse[] | null>(null);
    const [error, setError] = useState<string>(null);
    const meanings: Meaning[] = data && data[0].meanings;

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const dictionnaryInputValue = e.target[0].value;
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${dictionnaryInputValue}`;

        dictionnaryInputValue &&
            fetch(url)
                .then(response => {
                    if (response.ok === false) throw "This word doesn't exists";
                    return response.json();
                })
                .then(data => {
                    setData(data);
                    setError(null);
                })
                .catch(e => {
                    setError(e);
                    setData(null);
                });
    };

    const generateMeanings = (meanings: Meaning[]) => {
        return meanings?.map(({ partOfSpeech, definitions, synonyms }, i) => {
            return (
                <section key={i}>
                    {/* <h2>{props.partOfSpeech}</h2> */}
                    <WordClass class={partOfSpeech} />
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

    const generateSourceURL = (data: DictionnaryAPIResponse[]) => {
        return (
            data && (
                <>
                    <hr />
                    <span>Source : </span>
                    {data.map(({ sourceUrls }, i: number) => (
                        <span key={i}>{sourceUrls}</span>
                    ))}
                </>
            )
        );
    };

    return (
        <>
            <Header />
            <DictionnarySearchForm onSubmitFunction={handleSubmit} />
            <Typography tagName={"h1"}>{error || ""}</Typography>
            {meanings && generateMeanings(meanings)}
            {data && generateSourceURL(data)}
        </>
    );
};

export default App;
