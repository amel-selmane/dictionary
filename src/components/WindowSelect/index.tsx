import React, { useRef, MouseEvent, useEffect, Dispatch, SetStateAction, HTMLAttributes } from "react";
import "./windowSelect.css";
import { fonts } from "../../data/fontFamilies";

type WindowSelectProps = {
    setFontName: Dispatch<SetStateAction<string>>;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    className?: HTMLAttributes<HTMLUListElement>["className"];
    isWindowOpen?: boolean;
};

function WindowSelect({ className, setFontName, setIsOpen, isWindowOpen }: WindowSelectProps) {
    const ulElement = useRef<HTMLUListElement>(null);
    const elementsRefs = useRef<HTMLElement[]>([]);

    useEffect(() => {
        const closingClickEvent = (mouseEvent: Event) => {
            const target = mouseEvent.target as HTMLElement;
            const fontsListWindow = ulElement.current;
            const fontsListWindowOpenButton = fontsListWindow?.previousElementSibling;

            const isWindowClicked = fontsListWindow?.contains(target);
            const isWindowOpenButtonClicked = fontsListWindowOpenButton?.contains(target);
            if (!isWindowClicked && !isWindowOpenButtonClicked) setIsOpen(false);
        };

        window.addEventListener("mousedown", closingClickEvent);
        window.addEventListener("keydown", closingClickEvent);

        return () => {
            window.removeEventListener("mousedown", closingClickEvent);
            window.removeEventListener("keydown", closingClickEvent);
        };
    }, [setIsOpen]);

    const handleClickWindowButtons = (e: MouseEvent, name: string, fontFamilyCSSVariable: string) => {
        const fontsListWindowOpenButton = ulElement.current?.previousElementSibling;
        const targetButtonElement = e.target as HTMLButtonElement;

        // Clean all active classes
        elementsRefs.current.forEach(button => button.classList.remove("active"));

        // Add active class and change font-family
        targetButtonElement.classList.add("active");
        document.body.style.fontFamily = `var(--${fontFamilyCSSVariable})`;

        // Pass font name to parent
        setFontName(name);

        (fontsListWindowOpenButton as HTMLButtonElement).focus();
    };

    return (
        <ul
            id="window-select"
            className={`z-10 w-[183px] rounded-2xl bg-white p-6 text-sm font-bold text-midlight-black shadow-window dark:bg-dark-black dark:text-white dark:shadow-darkWindow desktop:text-lg ${className}`}
            ref={ulElement}
            aria-hidden={isWindowOpen ? null : "true"}
        >
            {fonts.map(({ name, fontFamilyCSSVariable }, index) => (
                <li key={name} className={`mb-4 last:mb-0`}>
                    <button
                        type="button"
                        className={`hover:text-custom-purple${index === 0 ? " active" : ""}`}
                        style={{ fontFamily: `var(--${fontFamilyCSSVariable})` }}
                        onClick={clickEvent => handleClickWindowButtons(clickEvent, name, fontFamilyCSSVariable)}
                        ref={el => (elementsRefs.current[index] = el)}
                        tabIndex={isWindowOpen ? null : -1}
                    >
                        {name}
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default WindowSelect;
