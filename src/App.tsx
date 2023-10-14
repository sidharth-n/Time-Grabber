import React, { useState } from "react";
import InputPage from "./InputPage";
import ResultPage from "./ResultPage";

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string | null>(null);
  const [isValidAge, setIsValidAge] = useState<boolean>(false);
  const [inputAge, setInputAge] = useState(0);

  const handlePaste = (text: string) => {
    const age = parseInt(text, 10); // Convert string to integer

    if (age >= 1 && age <= 120) {
      setInputValue(text);
      setIsValidAge(true);
      setInputAge(age);
    } else {
      window.alert("Please enter a valid age between 1 and 120.");
    }
  };

  return (
    <>
      {isValidAge ? (
        <ResultPage age={inputAge} />
      ) : (
        <InputPage onPaste={handlePaste} />
      )}
    </>
  );
};

export default App;
