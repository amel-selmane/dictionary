import { useRef, MouseEvent, Dispatch, SetStateAction, HTMLAttributes, forwardRef, ForwardedRef } from "react";
import { fonts } from "../../data/fontFamilies";

type WindowSelectProps = {
    setFontName: Dispatch<SetStateAction<string>>;
    className?: HTMLAttributes<HTMLUListElement>["className"];
    isWindowOpen?: boolean;
};

type handleClickWindowButtonsParams = {
    clickEvent: MouseEvent;
    name: string;
    fontFamilyCSSVariable: string;
};

const WindowSelect = forwardRef<HTMLUListElement, WindowSelectProps>(function WindowSelect(
    { className, setFontName, isWindowOpen },
    ref: ForwardedRef<HTMLUListElement>,
) {
    const windowSelectRef = useRef<HTMLUListElement | null>(null);
    const fontButtonsRef = useRef<HTMLButtonElement[]>([]);

    const defineListElementRefToForward = (element: HTMLUListElement) => {
        // Assign to external ref
        if (typeof ref === "function") ref(element);
        else if (ref !== null) ref.current = element;

        // Assign to internal ref
        windowSelectRef.current = element;
    };

    const handleClickWindowButtons = (params: handleClickWindowButtonsParams) => {
        const { clickEvent, name, fontFamilyCSSVariable } = params;

        const cleanButtonsActiveClasses = () =>
            fontButtonsRef.current.forEach(button => button.classList.remove("active"));
        const addButtonActiveClass = () => (clickEvent.target as HTMLButtonElement).classList.add("active");
        const setFontFamilyToDocument = () => (document.body.style.fontFamily = `var(--${fontFamilyCSSVariable})`);
        const focusOpenButtonAfterFontSelection = () =>
            (windowSelectRef.current?.previousElementSibling as HTMLButtonElement).focus();

        cleanButtonsActiveClasses();
        addButtonActiveClass();
        setFontName(name);
        setFontFamilyToDocument();
        focusOpenButtonAfterFontSelection();
    };

    return (
        <ul
            id="window-select"
            className={`z-10 w-[183px] rounded-2xl bg-white p-6 text-sm font-bold text-midlight-black shadow-window dark:bg-dark-black dark:text-white dark:shadow-darkWindow desktop:text-lg ${className}`}
            aria-hidden={isWindowOpen ? null : "true"}
            ref={defineListElementRefToForward}
        >
            {fonts.map(({ name, fontFamilyCSSVariable }, index) => (
                <li key={name} className={`mb-4 last:mb-0`}>
                    <button
                        type="button"
                        className={`hover:text-custom-purple${index === 0 ? " active" : ""}`}
                        style={{ fontFamily: `var(--${fontFamilyCSSVariable})` }}
                        onClick={clickEvent => handleClickWindowButtons({ clickEvent, name, fontFamilyCSSVariable })}
                        ref={fontButton => (fontButtonsRef.current[index] = fontButton)}
                        tabIndex={isWindowOpen ? null : -1}
                    >
                        {name}
                    </button>
                </li>
            ))}
        </ul>
    );
});

export default WindowSelect;
