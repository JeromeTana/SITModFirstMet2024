import React, { useRef, useState } from "react";
import "./styles/App.css"; // Import the CSS file for styling
import RefreshButton from "./components/RefreshButton";
import HelperButton from "./components/HelperButton";

const RandomCharacterGenerator = () => {
    const [selectedChar, setCharacter] = useState("");
    const [flipped, setFlipped] = useState(false);
    const inputRef = useRef();

    const generateRandomCharacter = () => {
        const charList = "?ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (inputRef.current) inputRef.current.value = "";
        const randomChar = charList.charAt(
            Math.floor(Math.random() * charList.length)
        );
        setFlipped(false);
        setTimeout(() => {
            setFlipped(true);
            setCharacter(randomChar);
        }, 300);
    };

    useState(() => {
        generateRandomCharacter();
    }, []);

    const handleRefresh = () => {
        generateRandomCharacter();
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="max-w-sm">
                <div className="flip-card">
                    <div
                        className={`flip-card-inner ${
                            flipped ? "flipped" : ""
                        }`}
                    >
                        <div className="bg-white border-white border-[16px] flip-card-front" />
                        <div
                            className={`flip-card-back ${
                                selectedChar === "?"
                                    ? "bg-gradient-to-tr from-pink-500 to-orange-500"
                                    : "bg-white"
                            }`}
                        >
                            <div className="flex text-[8rem] items-center justify-center h-full">
                                {selectedChar === "?" ? (
                                    <input
                                        type="text"
                                        ref={inputRef}
                                        autoFocus
                                        placeholder="?"
                                        className=" bg-[#00000000] outline-none border-b-2 text-white border-gray-400 w-3/4 font-bold text-center"
                                        maxLength={1}
                                        // disable backspace
                                        onKeyDown={(e) => {
                                            if (e.key === "Backspace") {
                                                e.preventDefault();
                                            }
                                        }}
                                    />
                                ) : (
                                    <span className="font-bold ">
                                        {selectedChar}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-4">
                    <RefreshButton handleRefresh={handleRefresh} />
                </div>
            </div>
            <HelperButton />
        </div>
    );
};

export default RandomCharacterGenerator;
