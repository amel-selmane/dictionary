export type Meaning = {
    antonyms: string[];
    definitions: Definition[];
    partOfSpeech: string;
    synonyms: string[];
};

export type Phonetics = {
    audio: string,
    license: object,
    sourceUrl: string,
    text?: string
}

export type Definition = {
    definition: string;
    antonyms: string[];
    synonyms: string[];
};

export type DictionnaryAPIResponse = {
    license: object;
    meanings: Meaning[];
    phonetics: object[];
    sourceUrls: string[];
    word: string;
};
