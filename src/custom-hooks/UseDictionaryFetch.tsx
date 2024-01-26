import { useEffect, useState } from "react";
import { DictionaryAPIResponse, ErrorData } from "../types/dictionary-api";

function UseDictionaryFetch(dictionaryWord: string) {
    // const [data, setData] = useState<DictionaryAPIResponse[] | ErrorData | null>(null);
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${dictionaryWord}`;

        dictionaryWord &&
            fetch(url)
                .then(response => {
                    return response.json();
                })
                .then(dataResponse => {
                    setData(dataResponse);
                });
    }, [dictionaryWord, data]);

    return data;
}

export default UseDictionaryFetch;
