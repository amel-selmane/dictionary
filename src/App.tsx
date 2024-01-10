import { useEffect, useState, useRef, FormEvent } from "react";
import "./App.css";

function App() {
  const [word, setWord] = useState<string | null>("");
  const [wordDefinition, setWordDefinition] = useState<string | null>("");
  // const [wordType, setWordType] = useState<string | null>("");
  const [data, setData] = useState<JSON | null>(null)

  const dictionnaryInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log("MY DATA", data)
  }, [data]);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    const dictionnaryInputValue = dictionnaryInput.current!.value;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${dictionnaryInputValue}`;

    dictionnaryInputValue &&
      fetch(url).then(response => {
        if (response.status === 404) {
          response.json().then(data => setWordDefinition("🙁 " + data.title + " 🙁"));
        } else {
          response.json().then(data => {
            setWord(dictionnaryInputValue);
            setWordDefinition(data[0].meanings[0].definitions[0].definition);
            setData(data[0].meanings);
          });
        }
      });
  };

  return (
    <>
      <h1>{word}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Write your word" ref={dictionnaryInput} />
        &nbsp;
        <input type="submit" value="Search" />
      </form>
      <div>
        <p>{wordDefinition}</p>
      </div>
    </>
  );
}

export default App;
