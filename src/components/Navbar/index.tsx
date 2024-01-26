import React, { useState} from "react";
import DictionaryIcon from "../svg-components/DictionaryIcon";
import MoonIcon from "../svg-components/MoonIcon";
import BottomArrowIcon from "../svg-components/BottomArrowIcon";
import SwitchButton from "../SwitchButton";
import WindowSelect from "../WindowSelect";
import "./navbar.css";

type NavbarProps = {
    className?: string;
};

function Navbar(props: NavbarProps) {
    const { className } = props;
    const [visible, setVisible] = useState(false);

    return (
        <nav className={`flex justify-between items-center select-none ${className}`}>
            <span>
                <DictionaryIcon />
            </span>
            <div className="flex gap-x-[26px] text-midlight-grey">
                <div className="relative">
                    <button
                        type="button"
                        title="Select your font"
                        className="flex items-center gap-x-[18px] font-bold text-midlight-black"
                        onClick={() => setVisible(!visible)}
                    >
                        <span>Sans Serif</span> <BottomArrowIcon />
                    </button>
                    <WindowSelect className={`${visible ? "" : "hidden"} absolute right-0 top-[calc(100% + 18px)]`} />
                </div>
                |
                <div className="flex items-center">
                    <SwitchButton />
                    <MoonIcon light />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
