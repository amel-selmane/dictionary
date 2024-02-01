import React, { useState, FormEvent, useEffect, useContext } from "react";
import { DarkModeContext } from "./contexts/darkModeContext";

// TYPES
import { DictionaryAPIResponse, ErrorData, Meaning } from "./types/dictionary-api";

// CUSTOM HOOKS
// import useDictionaryFetch from "./custom-hooks/useDictionaryFetch";

// COMPONENTS
import SearchForm from "./components/SearchForm";
import WordHeading from "./components/WordHeading";
import WordDefinition from "./components/WordDefinition";
import ErrorMessage from "./components/ErrorMessage";
import WordType from "./components/WordType";
import WordSynonym from "./components/WordSynonym";
import SourceUrl from "./components/SourceUrl";
import Navbar from "./components/Navbar";

// LAYOUTS
import WordHeadingLayout from "./layouts/WordHeadingLayout";
import WordTypeLayout from "./layouts/WordTypeLayout";
import WordDefinitionsLayout from "./layouts/WordDefinitionsLayout";
import WordSynonymsLayout from "./layouts/WordSynonymsLayout";
import WordMainContentLayout from "./layouts/WordMainContentLayout";

const App = () => {
    const [successData, setSuccessData] = useState<DictionaryAPIResponse[] | null>(null);
    const [errorData, setErrorData] = useState<ErrorData | null>(null);
    const [hasError, setHasError] = useState<boolean>(false);
    const [isInputEmpty, setIsInputEmpty] = useState<boolean>(false);
    const meanings: Meaning[] = successData && successData[0].meanings;
    // const data = useDictionaryFetch(searchInputValue);
    const [darkMode] = useContext(DarkModeContext);

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        // setSearchInputValue(e.target[0].value);

        // if (searchInputValue) {
        //     console.log("EHRER")
        //     // (⚠️API functionnality⚠️)
        //     // This API doesn't returns an error when the word doesn't exist, it also returns data
        //     // Data with "title" property is an error
        //     const error = data?.title !== undefined;

        //     setHasError(error);
        //     setSuccessData(error ? null : data);
        //     setErrorData(error ? data : null);
        // } else {
        //     console.log("ELSE");
        //     setIsInputEmpty(searchInputValue === "");
        //     setHasError(false);
        //     setSuccessData(null);
        //     setErrorData(null);
        // }

        const dictionnaryInputValue = e.target[0].value;
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${dictionnaryInputValue}`;
        setIsInputEmpty(dictionnaryInputValue === "");

        dictionnaryInputValue
            ? fetch(url)
                  .then(response => {
                      return response.json();
                  })
                  .then(data => {
                      // (⚠️API functionnality⚠️)
                      // This API doesn't returns an error when the word doesn't exist, it also returns data
                      // Data with "title" property is an error
                      const error = data?.title !== undefined;

                      setHasError(error);
                      setSuccessData(error ? null : data);
                      setErrorData(error ? data : null);
                  })
            : setHasError(false);
        setSuccessData(null);
        setErrorData(null);
    };

    return (
        <>
            <Navbar className="mt-[58px]" />

            <SearchForm onSubmitFunction={handleSubmit} isInputEmpty={isInputEmpty} />

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
                        <WordMainContentLayout key={i} className="mt-10">
                            <WordTypeLayout>
                                {/* Noun, Verb, etc. */}
                                <WordType wordType={partOfSpeech} />
                            </WordTypeLayout>

                            <WordDefinitionsLayout>
                                {definitions.map((definition, j) => (
                                    <WordDefinition
                                        key={j}
                                        definition={definition.definition}
                                        className="mt-3 first:mt-0 pl-5"
                                    />
                                ))}
                            </WordDefinitionsLayout>
                            {synonyms.length !== 0 && (
                                <WordSynonymsLayout className="mt-16">
                                    {synonyms.map((synonym, j) => {
                                        return <WordSynonym key={j} synonym={synonym} />;
                                    })}
                                </WordSynonymsLayout>
                            )}
                        </WordMainContentLayout>
                    );
                })}

            {!hasError && successData && <SourceUrl data={successData} className="mt-10" />}
        </>
    );
};

export default App;
