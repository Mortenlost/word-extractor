import React from "react";

const bg = require("./bg.jpg"); 

export const App = () => {
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
                    <input className="w-full mb-2 rounded p-2 text-lg text-gray-700 placeholder-gray-700 font focus:outline-none" type="text" name="url" placeholder="URL" />
                    <input className="w-full mb-2 rounded p-2 text-lg text-gray-700 placeholder-gray-700 font focus:outline-none" type="text" name="letter" placeholder="Letter" />
                    <button className="py-2 px-6 bg-teal-400 text-teal-900 font-bold text-xl rounded focus:outline-none" type="submit">Get Words</button>
                </form>
            </div>
        </div>
    );
}