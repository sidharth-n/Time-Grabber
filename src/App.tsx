import React, { useState } from "react";
import InputPage from "./InputPage";
import ResultPage from "./ResultPage";

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string | null>(null);
  const [isValidAge, setIsValidAge] = useState<boolean>(false);
  const [age, setAge] = useState(0);

  const handlePaste = (text: string) => {
    const age = parseInt(text, 10); // Convert string to integer

    if (age >= 1 && age <= 120) {
      setInputValue(text);
      setIsValidAge(true);
      setAge(age);
    } else {
      window.alert("Please enter a valid age between 1 and 120.");
    }
  };

  return (
    <>
      {isValidAge ? (
        <ResultPage age={age} />
      ) : (
        <InputPage onPaste={handlePaste} />
      )}
    </>
  );
};

export default App;
