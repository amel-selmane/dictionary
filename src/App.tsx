import { useState, useRef, MouseEventHandler, FormEventHandler, useEffect } from "react";

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
    const mainTitleRef = useRef<HTMLHeadingElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const { successData, errorData, hasError } = UseDictionaryFetch(dictionaryWord);

    const handleSubmitForm: FormEventHandler<HTMLFormElement> = onSubmitEvent => {
        onSubmitEvent.preventDefault();
        const submittedValue = inputRef.current.value;

        setIsInputEmpty(submittedValue === "");
        setDictionaryWord(submittedValue);
    };

    const handleClickSynonym: MouseEventHandler<HTMLButtonElement> = clickEvent => {
        const synonym = (clickEvent.target as HTMLButtonElement).textContent;

        setDictionaryWord(synonym);
        inputRef.current.value = synonym;
    };

    useEffect(() => {
        mainTitleRef.current?.focus();
    }, [successData]);

    return (
        <>
            <Navbar className="mt-[58px]" />
            <SearchForm onSubmitFunction={handleSubmitForm} isInputEmpty={isInputEmpty} ref={inputRef} />

            {/* IF WORD DOESN'T EXISTS */}
            {hasError && errorData && <ErrorMessage errorData={errorData} />}

            {/* IF WORD EXISTS */}
            {!hasError && !isInputEmpty && successData && (
                <>
                    <WordHeadingLayout className="mt-6 desktop:mt-9">
                        <WordHeading data={successData} ref={mainTitleRef} />
                    </WordHeadingLayout>

                    {successData[0]?.meanings?.map(({ partOfSpeech, definitions, synonyms }, i) => (
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
