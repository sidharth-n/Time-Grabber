import React, { useState, useRef, useEffect } from "react";
import "./InputPage.css";

const InputPage: React.FC<{ onPaste: (text: string) => void }> = ({
  onPaste,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handlePaste = async () => {
    if (navigator.clipboard) {
      const text = await navigator.clipboard.readText();
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
        />
        <button
          type="button"
          className="absolute end-1 top-1/2 -translate-y-1/2 rounded-md bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
          onClick={handlePaste}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-clipboard-list"
          >
            <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            <path d="M12 11h4" />
            <path d="M12 16h4" />
            <path d="M8 11h.01" />
            <path d="M8 16h.01" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default InputPage;
