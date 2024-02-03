import React, { useState, useRef, MouseEventHandler, FormEventHandler, useEffect } from "react";

// TYPES
import { Meaning } from "./types/dictionary-api";

// CUSTOM HOOKS
import UseDictionaryFetch from "./custom-hooks/UseDictionaryFetch";

// COMPONENTS
import SearchForm from "./components/SearchForm";
import WordHeading from "./components/WordHeading";
import DefinitionsBlock from "./components/DefinitionsBlock";
import ErrorMessage from "./components/ErrorMessage";
import WordType from "./components/WordType";
import SynonymsBlock from "./components/SynonymsBlock";
import SourceUrl from "./components/SourceUrl";
import Navbar from "./components/Navbar";

// LAYOUTS
import WordHeadingLayout from "./layouts/WordHeadingLayout";

const App = () => {
    const [dictionaryWord, setDictionaryWord] = useState<string>("");
    const [isInputEmpty, setIsInputEmpty] = useState<boolean>(false);
    const { successData, errorData, hasError } = UseDictionaryFetch(dictionaryWord);
    const meanings: Meaning[] = successData && successData[0].meanings;
    const mainTitleRef = useRef(null);

    const handleSubmit: FormEventHandler<HTMLFormElement> = onSubmitEvent => {
        onSubmitEvent.preventDefault();

        const submittedValue = onSubmitEvent.target[0].value;
        onSubmitEvent.target[0].value = null;

        setIsInputEmpty(submittedValue === "");
        // submittedValue === "" ? onSubmitEvent.target[0].focus() : ;

        setDictionaryWord(submittedValue);
    };

    const handleClickSynonym: MouseEventHandler<HTMLButtonElement> = clickEvent => {
        const synonym = clickEvent.target as HTMLButtonElement;
        setDictionaryWord(synonym.textContent);
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        const h1WordElement = mainTitleRef.current;
        h1WordElement?.focus();
    }, [successData])

    return (
        <>
            <Navbar className="mt-[58px]" />
            <SearchForm onSubmitFunction={handleSubmit} isInputEmpty={isInputEmpty} />

            {/* IF WORD DOESN'T EXISTS */}
            {hasError && errorData && <ErrorMessage errorData={errorData} />}

            {/* IF WORD EXISTS */}
            {!hasError && !isInputEmpty && successData && (
                <>
                    <WordHeadingLayout className="mt-6 desktop:mt-9">
                        <WordHeading data={successData} ref={mainTitleRef} />
                    </WordHeadingLayout>

                    {meanings?.map(({ partOfSpeech, definitions, synonyms }, i) => (
                        <section key={i} className="mt-7 desktop:mt-10">
                            <WordType wordType={partOfSpeech} />
                            <DefinitionsBlock definitions={definitions} />
                            <SynonymsBlock
                                onClick={handleClickSynonym}
                                synonyms={synonyms}
                                className="mt-6 desktop:mt-10"
                            />
                        </section>
                    ))}
                    <SourceUrl data={successData} className="mt-8 desktop:mt-10" />
                </>
            )}
        </>
    );
};

export default App;
