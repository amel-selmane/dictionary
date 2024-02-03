import { useEffect, useState } from "react";
import { DictionaryAPIResponse, ErrorData } from "../types/dictionary-api";

function UseDictionaryFetch(dictionaryWord: string) {
    // successData represents the data collected when the word exists
    const [successData, setSuccessData] = useState<DictionaryAPIResponse[] | null>(null);
    // errorData represents the data collected when the word doesn't exist
    const [errorData, setErrorData] = useState<ErrorData | null>(null);
    const [hasError, setHasError] = useState<boolean>(false);


    useEffect(() => {
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${dictionaryWord}`;

        dictionaryWord &&
            fetch(url)
                .then(response => response.json())
                .then(dataResponse => {
                    // (⚠️API functionnality⚠️)
                    // This API doesn't returns an error when the word doesn't exist, it also returns data
                    // Data returned with "title" property is an error
                    const error = dataResponse?.title !== undefined;

                    setHasError(error);
                    setSuccessData(error ? null : dataResponse);
                    setErrorData(error ? dataResponse : null);
                });
    }, [dictionaryWord]);

    return { successData, errorData, hasError };
}

export default UseDictionaryFetch;
