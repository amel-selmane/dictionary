import React from "react";
import "./switchButton.css";

function SwitchButton() {
    return (
        <>
            <input type="checkbox" id="check-button" className="hidden" title="Toggle dark theme" />
            <label
                htmlFor="check-button"
                className="check-button w-[40px] h-5 bg-mid-grey cursor-pointer border border-white border-solid rounded-xl relative transition-colors duration-300 select-none before:content-[''] before:absolute before:right-[7%] before:top-2/4 before:translate-y-[-50%]  before:w-[13px] before:h-[13px] before:rounded-3xl before:bg-white [&:before]:transition-transform [&:before]:duration-300"
            ></label>
        </>
    );
}

export default SwitchButton;
