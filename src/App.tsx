import { useState, FormEvent } from "react";

// IMPORT TYPES
import { DictionnaryAPIResponse, ErrorData, Meaning, Phonetic } from "./types/dictionnary-api";

// IMPORT COMPONENTS
import Typography from "./components/Typography";
import DictionnarySearchForm from "./components/DictionnarySearchForm";
import DictionnaryWordType from "./components/DictionnaryWordType";

// IMPORT LAYOUTS
import Header from "./layouts/HeaderLayout";

const App = () => {
    const [successData, setSuccessData] = useState<DictionnaryAPIResponse[] | null>(null);
    const [errorData, setErrorData] = useState<ErrorData | null>(null);
    const [hasError, setHasError] = useState<boolean>(false);
    const meanings: Meaning[] = successData && successData[0].meanings;

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const dictionnaryInputValue = e.target[0].value;
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${dictionnaryInputValue}`;

        dictionnaryInputValue &&
            fetch(url)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    // (⚠️API functionnality⚠️)
                    // If the title property exists on data => 404 Error
                    const error = data.title !== undefined;

                    setHasError(error);
                    setSuccessData(error ? null : data);
                    setErrorData(error ? data : null);
                });
    };

    const generateWordHeading = () => {
        
        return (
            <header>
                {successData[0].word}
                {successData[0].phonetic}

                <div className="audio-container">
                    <audio src={successData[0].phonetics[0].audio} className=""></audio>
                    <button className="play-button">▶️</button>
                </div>
            </header>
        )
    }

    const generateMeanings = (meanings: Meaning[]) => {
        return meanings?.map(({ partOfSpeech, definitions, synonyms }, i) => {
            return (
                <section key={i}>
                    <DictionnaryWordType wordType={partOfSpeech} />
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
            <>
                <hr />
                <span>Source : </span>
                {data.map(({ sourceUrls }, i: number) => (
                    <span key={i}>{sourceUrls}</span>
                ))}
            </>
        );
    };

    const generateErrorMessage = () => {
        return (
            <>
                <Typography tagName={"p"} className="">😕</Typography>
                <Typography tagName={"h1"} className="">
                    {errorData.title}
                </Typography>
                <Typography tagName={"p"} className="">
                    {errorData.message + " " + errorData.resolution}
                </Typography>
            </>
        );
    };

    return (
        <>
            <Header />
            <DictionnarySearchForm onSubmitFunction={handleSubmit} />
            {hasError && generateErrorMessage()}
            {!hasError && successData && generateWordHeading()}
            {!hasError && successData && generateMeanings(meanings)}
            {!hasError && successData && generateSourceURL(successData)}
        </>
    );
};

export default App;
