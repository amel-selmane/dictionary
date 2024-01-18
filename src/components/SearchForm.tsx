import React from "react";

function SearchForm({ onSubmitFunction }) {
    return (
        <form onSubmit={onSubmitFunction} className="flex relative mt-[3.2rem]">
            <input
                type="text"
                placeholder="Search for any word…"
                className="w-full bg-light-grey rounded-2xl h-16 text-xl text-midlight-black font-bold py-5 px-6 placeholder:text-midlight-black placeholder:opacity-25 outline-custom-purple transition-all duration-300"
            />
            <button type="submit" className="absolute right-6 top-1/2 translate-y-[-50%]">
                🔍
            </button>
        </form>
    );
}

export default SearchForm;
