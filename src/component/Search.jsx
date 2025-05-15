import { useState } from "react";
import Definition from "./Definition";

export default function Search() {
  const [text, setText] = useState("");
  const [definition, setDefinition] = useState("");

  const dictionary = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const handleSearch = () => {
    const result = dictionary.find(
      (entry) => entry.word.toLowerCase() === text.toLowerCase()
    );
    if (result) {
      setDefinition(result.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <>
      <h1>Dictionary App</h1>

      <input
        type="text"
        placeholder="search for a word"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <Definition definition={definition} />
    </>
  );
}
