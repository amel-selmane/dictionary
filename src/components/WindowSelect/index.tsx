import React, { useRef, MouseEvent, useEffect, Dispatch, SetStateAction } from "react";
import "./windowSelect.css";
import { fonts } from "../../data/fontFamilies";

type WindowSelectProps = {
    className?: string;
    // eslint-disable-next-line no-unused-vars
    setFontName: Dispatch<SetStateAction<string>>;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};

function WindowSelect(props: WindowSelectProps) {
    const { className, setFontName, setIsOpen } = props;
    const ulElement = useRef<HTMLUListElement>(null);
    const elementsRefs = useRef<HTMLElement[]>([]);

    useEffect(() => {
        const closingClickEvent = (mouseEvent: Event) => {
            const target = mouseEvent.target as HTMLElement;
            const fontsListWindow = ulElement.current;
            const fontsListWindowOpenButton = fontsListWindow?.previousElementSibling;

            const isWindowClicked = fontsListWindow?.contains(target);
            const isWindowOpenButtonClicked = fontsListWindowOpenButton?.contains(target);

            (!isWindowClicked && !isWindowOpenButtonClicked) && 
                setIsOpen(false);
        };

        window.addEventListener("mousedown", closingClickEvent);
        window.addEventListener("keydown", closingClickEvent);

        return () => {
            window.removeEventListener("mousedown", closingClickEvent);
            window.removeEventListener("keydown", closingClickEvent);
        };
    }, [setIsOpen]);

    const handleClickWindowButtons = (e: MouseEvent, name: string, fontFamilyCSSVariable: string) => {
        const targetButtonElement = e.target as HTMLButtonElement;
        
        // Clean all active classes
        elementsRefs.current.forEach(button => button.classList.remove("active"));

        // Add active class and change font-family
        targetButtonElement.classList.add("active");
        document.body.style.fontFamily = `var(--${fontFamilyCSSVariable})`;

        // Pass font name to parent
        setFontName(name);
    };

    return (
        <ul
            id="window-select"
            className={`z-10 w-[183px] rounded-2xl bg-white p-6 text-sm font-bold text-midlight-black shadow-window dark:bg-dark-black dark:text-white dark:shadow-darkWindow desktop:text-lg ${className}`}
            ref={ulElement}
        >
            {fonts.map(({ name, fontFamilyCSSVariable }, index) => (
                <li key={name} className={`mb-4 last:mb-0`}>
                    <button
                        type="button"
                        className={`hover:text-custom-purple${index === 0 ? " active" : ""}`}
                        style={{ fontFamily: `var(--${fontFamilyCSSVariable})` }}
                        onClick={clickEvent => handleClickWindowButtons(clickEvent, name, fontFamilyCSSVariable)}
                        ref={el => (elementsRefs.current[index] = el)}
                    >
                        {name}
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default WindowSelect;
