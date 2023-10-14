import React, { useState, useRef, useEffect } from "react";
import "./InputPage.css";

const InputPage: React.FC<{ onPaste: (text: string) => void }> = ({
  onPaste,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handlePaste = async () => {
    if (navigator.clipboard) {
      const text = inputValue;
      setInputValue(text);
      onPaste(text);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = inputValue;
    }
  }, [inputValue]);

  return (
    <div className="container flex flex-col items-stretch p-4 pb-8">
      <div className="relative sm:block mt-64">
        <label className="sr-only" htmlFor="search">
          Search
        </label>
        <input
          className="h-10 w-full rounded-lg border-none bg-white pe-10 ps-4 text-sm shadow-sm "
          id="search"
          type="search"
          placeholder="Type your age here"
          ref={inputRef}
          value={inputValue}
        />
        <button
          type="button"
          className="absolute end-1 top-1/2 -translate-y-1/2 rounded-md bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
          onClick={handlePaste}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-power"
          >
            <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
            <line x1="12" x2="12" y1="2" y2="12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default InputPage;
