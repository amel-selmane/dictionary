import { useEffect, useState, useRef, FormEvent } from "react";
import { DictionnaryAPIResponse, Meaning } from "./types/dictionnary-api";
import "./App.css";

function App() {
  const [data, setData] = useState<DictionnaryAPIResponse[] | null>(null);
  const [errorData, setErrorData] = useState<string>('');
  const meanings: Meaning[] = data && data[0].meanings;

  const dictionnaryInput = useRef<HTMLInputElement>(null);

  useEffect(() => {}, []);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    const dictionnaryInputValue = dictionnaryInput.current!.value;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${dictionnaryInputValue}`;

    dictionnaryInputValue &&
      fetch(url)
        .then(response => {
          if (response.ok === false) throw "This word doesn't exists";
          return response.json();
        })
        .then(data => {
          setData(data);
          setErrorData(null);
        })
        .catch(e => {
          setErrorData(e);
          setData(null);
        });
  };

  return (
    <>
      <h1>{errorData?.toString()}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Write your word" ref={dictionnaryInput} />
        &nbsp;
        <input type="submit" value="Search" />
      </form>
      <div>
        {meanings?.map((meaning, i) => <h2 key={i}>{meaning.partOfSpeech}</h2>)}
      </div>
    </>
  );
}

export default App;
