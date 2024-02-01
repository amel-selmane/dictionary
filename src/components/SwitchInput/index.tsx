import React from "react";
import "./switchInput.css";

function SwitchInput() {
    return (
        <>
            <input
                type="checkbox"
                id="check-button"
                className="hidden"
                title="Toggle dark theme"
                onChange={() => document.documentElement.classList.toggle("dark")}
            />
            <label
                htmlFor="check-button"
                className="check-button w-[40px] h-5 bg-mid-grey cursor-pointer rounded-[10px] relative select-none before:content-[''] before:absolute before:right-[7%] before:top-2/4 before:translate-y-[-50%]  before:w-[14px] before:h-[14px] before:rounded-3xl before:bg-white [&:before]:transition-transform [&:before]:duration-100"
            ></label>
        </>
    );
}

export default SwitchInput;
