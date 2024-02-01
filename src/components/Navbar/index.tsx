import React, { useState, useContext } from "react";
import DictionaryIcon from "../svg-components/DictionaryIcon";
import MoonIcon from "../svg-components/MoonIcon";
import BottomArrowIcon from "../svg-components/BottomArrowIcon";
import SwitchInput from "../SwitchInput";
import WindowSelect from "../WindowSelect";
import "./navbar.css";

type NavbarProps = {
    className?: string;
};

function Navbar(props: NavbarProps) {
    const { className } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [fontName, setFontName] = useState("Sans Serif");

    return (
        <nav className={`flex justify-between items-center select-none ${className}`}>
            <DictionaryIcon />
            <div className="flex items-center gap-x-[26px] text-midlight-grey">
                <div className="relative">
                    <button
                        type="button"
                        title="Select your font"
                        className="flex items-center gap-x-[18px] h-6 font-bold text-midlight-black dark:text-white"
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                    >
                        <span className="font-name pointer-events-none">{fontName}</span>
                        <BottomArrowIcon className={"pointer-events-none"} />
                    </button>
                    <WindowSelect
                        className={`absolute right-0${isOpen ? "" : " hidden"}`}
                        setFontName={setFontName}
                        setIsOpen={setIsOpen}
                    />
                </div>
                <div className="flex items-center before:content-[''] before:block before:w-px before:bg-midlight-grey before:h-[32px] before:mr-6">
                    <SwitchInput />
                    <MoonIcon />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
