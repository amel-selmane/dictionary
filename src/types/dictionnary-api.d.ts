type License = {
  name: string;
  url: string;
};

type Phonetic = {
  audio: string;
  license: License;
  sourceUrl: string;
  text?: string;
};

export type Definition = {
  definition: string;
  antonyms: string[];
  synonyms: string[];
  example?: string;
};

export type Meaning = {
  antonyms: string[];
  definitions: Definition[];
  partOfSpeech: string;
  synonyms: string[];
};

export type DictionnaryAPIResponse = {
  license: License;
  meanings: Meaning[];
  phonetics: Phonetic[];
  sourceUrls: string[];
  word: string;
  phonetic: string;
};

export type ErrorData = {
  title: string;
  message: string;
  resolution: string;
}