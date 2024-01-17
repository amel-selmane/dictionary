import { useState, FormEvent } from "react";

// IMPORT TYPES
import { DictionaryAPIResponse, ErrorData, Meaning } from "./types/dictionary-api";

// IMPORT COMPONENTS
import Typography from "./components/Typography";
import DictionnarySearchForm from "./components/DictionarySearchForm";
import DictionaryWordHeading from "./components/DictionaryWordHeading";
import DictionaryWordDefinitions from "./components/DictionaryWordDefinitions";

// IMPORT LAYOUTS
import PageHeader from "./layouts/PageHeaderLayout";
import WordTitleLayout from "./layouts/WordTitleLayout";

const App = () => {
    const [successData, setSuccessData] = useState<DictionaryAPIResponse[] | null>(null);
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

    const generateSourceURL = (data: DictionaryAPIResponse[]) => {
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

    const generateErrorMessage = (errorData: ErrorData) => {
        return (
            <>
                <Typography tagName={"p"} className="">
                    😕
                </Typography>
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
            <PageHeader />
            <DictionnarySearchForm onSubmitFunction={handleSubmit} />
            {hasError && generateErrorMessage(errorData)}
            {/* {!hasError && successData && 
                <WordTitleLayout>
                    <DictionaryWordHeading data={successData} />
                </WordTitleLayout>
            } */}
            {!hasError && successData && <DictionaryWordDefinitions meanings={meanings} />}
            {!hasError && successData && generateSourceURL(successData)}
        </>
    );
};

export default App;
