import React, { useRef } from "react";
import "./windowSelect.css";

type WindowSelectProps = {
    className?: string;
};

function WindowSelect(props: WindowSelectProps) {
    const { className } = props;
    const listButton = useRef<HTMLUListElement>(null);

    console.log(listButton?.current?.querySelectorAll('li button'));

    return (
        <ul
            id="window-select"
            ref={listButton}
            className={`w-[183px] p-6 bg-white rounded-2xl shadow-window text-midlight-black font-bold z-10 ${className}`}
        >
            <li className="mb-4">
                <button type="button" className="active hover:text-custom-purple">
                    Sans Serif
                </button>
            </li>
            <li className="mb-4">
                <button type="button" className="hover:text-custom-purple">
                    Serif
                </button>
            </li>
            <li>
                <button type="button" className="hover:text-custom-purple">
                    Mono
                </button>
            </li>
        </ul>
    );
}

export default WindowSelect;
