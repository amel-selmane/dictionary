import React, { useRef, MouseEvent, useEffect } from "react";
import "./windowSelect.css";

type WindowSelectProps = {
    className?: string;
    // eslint-disable-next-line no-unused-vars
    setFontName: (fontName: string) => void;
    setIsOpen: () => void;
};

const fonts = [
    {
        name: "Sans Serif",
        fontFamilyValue: "Inter, sans-serif",
        // twConfigValue: "sans",
    },
    {
        name: "Serif",
        fontFamilyValue: "Lora, serif",
        // twConfigValue: "serif",
    },
    {
        name: "Mono",
        fontFamilyValue: "Inconsolata, monospace",
        // twConfigValue: "mono",
    },
];

function WindowSelect(props: WindowSelectProps) {
    const { className, setFontName, setIsOpen } = props;
    const ulElement = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const closingClickEvent = (mouseEvent: Event) => {
            const target = mouseEvent.target as HTMLElement;
            const windowSelect = ulElement.current;
            const windowOpenButton = windowSelect?.previousElementSibling;

            const isWindowClicked = windowSelect?.contains(target);
            const isWindowOpenButtonClicked = windowOpenButton?.contains(target);

            if (!isWindowClicked && !isWindowOpenButtonClicked) setIsOpen();
        };

        window.addEventListener("mousedown", closingClickEvent);

        return () => window.removeEventListener("mousedown", closingClickEvent);
    }, [setIsOpen]);

    const handleClick = (e: MouseEvent, name: string, fontFamilyValue: string): void => {
        const targetButtonElement = e.target as HTMLButtonElement;

        // Clean all active classes
        ulElement.current.querySelectorAll("button").forEach(button => button.classList.remove("active"));

        // Add active class and change font-family
        targetButtonElement.classList.add("active");
        document.body.style.fontFamily = `var(--${fontFamilyValue})`;

        // Pass font name to parent
        setFontName(name);
    };

    return (
        <ul
            id="window-select"
            className={`z-10 w-[183px] rounded-2xl bg-white p-6 text-sm font-bold text-midlight-black shadow-window dark:bg-dark-black dark:text-white dark:shadow-darkWindow desktop:text-lg ${className}`}
            ref={ulElement}
        >
            {fonts.map((font, i) => {
                const { name, fontFamilyValue } = font;

                return (
                    <li key={name} className={`mb-4 last:mb-0`} style={{ fontFamily: fontFamilyValue }}>
                        <button
                            type="button"
                            className={`hover:text-custom-purple${i === 0 ? " active" : ""}`}
                            onClick={clickEvent => handleClick(clickEvent, name, fontFamilyValue)}
                        >
                            {name}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}

export default WindowSelect;
