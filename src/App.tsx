import React, { useState, FormEvent } from "react";

// IMPORT TYPES
import { DictionaryAPIResponse, ErrorData, Meaning } from "./types/dictionary-api";

// IMPORT COMPONENTS
import SearchForm from "./components/SearchForm";
import WordHeading from "./components/WordHeading";
import WordDefinition from "./components/WordDefinition";
import ErrorMessage from "./components/ErrorMessage";
import WordType from "./components/WordType";
import SourceUrl from "./components/SourceUrl";
import WordSynonym from "./components/WordSynonym";

// IMPORT LAYOUTS
import PageHeader from "./layouts/PageHeaderLayout";
import WordHeadingLayout from "./layouts/WordHeadingLayout";
import WordTypeLayout from "./layouts/WordTypeLayout";
import WordDefinitionsLayout from "./layouts/WordDefinitionsLayout";
import WordSynonymsLayout from "./layouts/WordSynonymsLayout";
import WordBlockLayout from "./layouts/WordBlockLayout";

const App = () => {
    const [successData, setSuccessData] = useState<DictionaryAPIResponse[] | null>(null);
    const [errorData, setErrorData] = useState<ErrorData | null>(null);
    const [hasError, setHasError] = useState<boolean>(false);
    const meanings: Meaning[] = successData && successData[0].meanings;

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const dictionnaryInputValue = e.target[0].value;
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${dictionnaryInputValue}`;

        dictionnaryInputValue ?
            fetch(url)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    // (⚠️API functionnality⚠️)
                    // If the title property exists on data = 404 Error
                    const error = data?.title !== undefined;

                    setHasError(error);
                    setSuccessData(error ? null : data);
                    setErrorData(error ? data : null);
                })
        :
            
            setHasError(false);
            setSuccessData(null);
            setErrorData(null);
            
    };

    return (
        <>
            <PageHeader />
            <SearchForm onSubmitFunction={handleSubmit} />
            {hasError && errorData && <ErrorMessage errorData={errorData} />}

            {!hasError && successData && (
                <WordHeadingLayout className="mt-9">
                    <WordHeading data={successData} />
                </WordHeadingLayout>
            )}

            {!hasError &&
                successData &&
                meanings.map((meaning, i) => {
                    const { partOfSpeech, definitions, synonyms } = meaning;

                    return (
                        <WordBlockLayout key={i} className="mt-10">
                            <WordTypeLayout>
                                {/* Noun, Verb, etc. */}
                                <WordType wordType={partOfSpeech} />
                            </WordTypeLayout>

                            <WordDefinitionsLayout>
                                {definitions.map((definition, j) => (
                                    <WordDefinition 
                                        key={j} 
                                        definition={definition.definition} 
                                        className="flex flex-row items-center gap-x-5 mt-3 first:mt-0" 
                                    />
                                ))}
                            </WordDefinitionsLayout>
                            {/* <WordSynonymsLayout>
                                {
                                    synonyms.map((synonym, j) => (
                                        return <WordSynonym synonym={synonyms} />
                                    ))
                                }
                            </WordSynonymsLayout> */}
                        </WordBlockLayout>
                    );
                })}

            {!hasError && successData && <SourceUrl data={successData} className="mt-10" />}
        </>
    );
};

export default App;
