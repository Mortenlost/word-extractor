import React, { useRef, useState } from "react";
import * as validUrl from "valid-url";

const bg = require("./bg.jpg");

export const App = () => {
    const refUrl = useRef(null);
    const refLetter = useRef(null);
    const [valid, setValid] = useState(false);
    return (
        <div>
            <div className="fixed top-0 left-0 w-screen h-screen z-0">
                <img className="object-cover w-full h-full" src={bg} />
            </div>
            <div className="fixed top-0 left-0 w-screen h-screen z-10 pl-5">
                <h1 className="text-white text-5xl font font-black text-shadow-black">
                    Word Extractor
                </h1>
                <form className="mt-5">
                    <input
                        onChange={(e) => {
                            if (validUrl.isWebUri(e.target.value)) {
                                setValid(true);
                            } else {
                                setValid(false);
                            }
                        }}
                        ref={refUrl}
                        className={`w-full mb-2 rounded p-2 text-lg text-gray-700 placeholder-gray-700 font focus:outline-none ${
                            valid ? "" : "border-2 border-red-600"
                        }`}
                        type="text"
                        name="url"
                        placeholder="URL"
                    />
                    <input
                        onChange={(e) => {
                            if (!e.target.validity.valid) {
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
                        className="py-2 px-6 bg-teal-400 text-teal-900 font-bold text-xl rounded focus:outline-none"
                        type="submit"
                    >
                        Get Words
                    </button>
                </form>
            </div>
        </div>
    );
};
