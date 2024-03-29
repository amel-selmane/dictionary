import React, { useState, useRef } from "react";
import DictionaryIcon from "../svg-components/DictionaryIcon";
import MoonIcon from "../svg-components/MoonIcon";
import BottomArrowIcon from "../svg-components/BottomArrowIcon";
import SwitchInput from "../SwitchInput";
import WindowSelect from "../WindowSelect";
import useClosingOnClickOutside from "../../custom-hooks/useClosingOnClickOutside";

const Navbar = ({ className }: { className?: string }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [fontName, setFontName] = useState<string>("Sans Serif");
    const windowSelectOpenButtonRef = useRef(null);
    const windowSelectRef = useRef(null);

    useClosingOnClickOutside(windowSelectRef, setIsOpen, windowSelectOpenButtonRef);

    const toggleWindowSelectTwClasses = () => {
        return isOpen
            ? "visible translate-y-0 opacity-100"
            : "visibility-hidden pointer-events-none translate-y-[-30px] opacity-0";
    };

    return (
        <nav className={`flex select-none items-center justify-between ${className}`}>
            <h1>
                <span className="sr-only">Dictionary application"</span>
                <a href="./" title="Main page Dictionary logo">
                    <DictionaryIcon />
                </a>
            </h1>
            <div className="flex items-center gap-x-[26px] text-midlight-grey">
                <div className="relative">
                    <button
                        type="button"
                        title="Select your font"
                        className="flex h-6 items-center gap-x-[18px] text-sm font-bold text-midlight-black dark:text-white desktop:text-lg"
                        onClick={() => setIsOpen(!isOpen)}
                        ref={windowSelectOpenButtonRef}
                    >
                        <span className="font-name pointer-events-none">{fontName}</span>
                        <BottomArrowIcon className={"pointer-events-none"} />
                    </button>
                    <WindowSelect
                        className={`absolute right-0 transition-all duration-200 ${toggleWindowSelectTwClasses()}`}
                        setFontName={setFontName}
                        isWindowOpen={isOpen}
                        ref={windowSelectRef}
                    />
                </div>
                <div className="flex items-center before:mr-6 before:block before:h-[32px] before:w-px before:bg-midlight-grey before:content-['']">
                    <SwitchInput />
                    <MoonIcon />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
