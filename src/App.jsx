import React, { useRef, useState } from "react";
import { isWebUri } from "valid-url";

const bg = require("./bg.jpg");

export const App = () => {
    const refUrl = useRef(null);
    const refLetter = useRef(null);
    const [validUrl, setValidUrl] = useState(false);
    const [validLetter, setValidLetter] = useState(false);
    const [url, setUrl] = useState("");
    const [letter, setLetter] = useState("");
    const [words, setWords] = useState([]);
    const canExtract = validUrl && url && letter && validLetter;
    return (
        <div>
            <div className="fixed top-0 left-0 w-screen h-screen z-0">
                <img className="object-cover w-full h-full" src={bg} />
            </div>
            <div className="fixed top-0 left-0 w-screen h-screen z-10 pl-5">
                <h1 className="text-white text-5xl font font-black text-shadow-black">
                    Word Extractor
                </h1>
                <form className="mt-5" onSubmit={(e) => {
                    e.preventDefault();
                    // TODO: get actual list
                    setWords(["flan", "pitufo", "ginger"]);
                }}>                    
                    <input
                        onChange={(e) => {     
                            setUrl(e.target.value);                                           
                            if (isWebUri(e.target.value)) {
                                setValidUrl(true);                                
                            } else {
                                setValidUrl(false);                        
                            }                            
                        }}
                        ref={refUrl}
                        className={`w-full mb-2 rounded p-2 text-lg text-gray-700 placeholder-gray-700 font focus:outline-none ${
                            validUrl ? "" : "border-2 border-red-600"
                        }`}
                        type="text"
                        name="url"
                        placeholder="URL"
                    />
                    <input
                        onChange={(e) => {
                            setLetter(e.target.value)
                            if (e.target.validity.valid) {
                                setValidLetter(true);
                            } else {
                                setValidLetter(false);
                                e.target.value = "";
                            }
                        }}
                        ref={refLetter}
                        className="w-full mb-2 rounded p-2 text-lg text-gray-700 placeholder-gray-700 font focus:outline-none"
                        type="text"
                        name="letter"
                        placeholder="Letter"
                        maxLength="1"
                        pattern="[a-z]*"
                    />
                    <button
                        className={`py-2 px-6 ${canExtract ? "bg-teal-400" : "bg-gray-400"} text-teal-900 font-bold text-xl rounded focus:outline-none`}
                        type="submit" 
                        disabled={!canExtract}
                    >
                        Get Words
                    </button>
                </form>  
                <div>
                    {words.map((word, i) => {
                        return (
                            <div key={`word-${i}`} className="mt-2 text-xl text-white font">
                                {word}
                            </div>
                        );
                    })}
                </div>          
            </div>            
        </div>
    );
};
