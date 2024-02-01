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
                className="check-button relative h-5 w-[40px] cursor-pointer select-none rounded-[10px] bg-mid-grey before:absolute before:right-[7%] before:top-2/4 before:size-[14px] before:translate-y-[-50%]  before:rounded-3xl before:bg-white before:content-[''] [&:before]:transition-transform [&:before]:duration-100"
            ></label>
        </>
    );
}

export default SwitchInput;
