import React from "react";
import LensIcon from "../svg-components/LensIcon";
import "./searchForm.css";

function SearchForm({ onSubmitFunction, isInputEmpty = false }) {
    return (
        <form onSubmit={onSubmitFunction} className="mt-[3.2rem]">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search for any word…"
                    className={`h-12 w-full rounded-2xl bg-light-grey px-6 py-5 text-base font-bold text-midlight-black transition-all duration-300 placeholder:text-midlight-black placeholder:opacity-25 focus:scale-[100.5%] focus:outline-double focus:outline-2 dark:bg-dark-black dark:text-white dark:placeholder:text-white dark:placeholder:opacity-100 desktop:h-16 desktop:text-xl
                    ${
                        isInputEmpty
                            ? " outline outline-2 outline-custom-red duration-0 focus:shadow-erroredInput focus:outline-custom-red"
                            : " outline-custom-purple focus:shadow-selectedInput focus:outline-custom-purple"
                    }`}
                    aria-invalid={isInputEmpty || null}
                    aria-describedby={isInputEmpty ? "error-message" : null}
                />
                <button type="submit" title="Search word" id="search-button" className="absolute right-0 top-1/2 flex h-full w-16 translate-y-[-50%] items-center justify-center">
                    <LensIcon isInputEmpty={isInputEmpty} />
                </button>
            </div>
            {isInputEmpty && (
                <span className="error-message mt-2 block text-custom-red" role="alert">
                    Whoops, can’t be empty…
                </span>
            )}
        </form>
    );
}

export default SearchForm;
