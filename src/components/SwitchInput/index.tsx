import React, { KeyboardEventHandler } from "react";
import "./switchInput.css";

function SwitchInput() {
    const handleKeydown: KeyboardEventHandler<HTMLLabelElement> = keyboardEvent => {
        if (keyboardEvent.key === "Enter" || keyboardEvent.key === " ") {
            document.getElementById("check-button")?.click();
        }
    };

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
                tabIndex={0}
                onKeyDown={handleKeydown}
                className="check-button relative h-5 w-[40px] cursor-pointer select-none rounded-[10px] bg-mid-grey before:absolute before:left-[7%] before:top-2/4 before:size-[14px] before:translate-y-[-50%] before:rounded-3xl before:bg-white before:content-[''] [&:before]:transition-transform [&:before]:duration-300"
            ></label>
        </>
    );
}

export default SwitchInput;
