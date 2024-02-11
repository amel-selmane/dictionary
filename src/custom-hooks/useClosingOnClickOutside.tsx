import { Dispatch, RefObject, SetStateAction, useEffect } from "react";

const useClosingOnClickOutside = (
    insideElementRef: RefObject<HTMLElement>,
    setCloseAction: Dispatch<SetStateAction<boolean>>,
    additionnalInsideElementRef?: RefObject<HTMLElement>,
): void => {
    useEffect(() => {
        const closingClickEvent = (mouseEvent: Event) => {
            const targetElement = mouseEvent.target as HTMLElement;

            const isInsideElementClicked = insideElementRef.current?.contains(targetElement);
            const isAdditionnalInsideElementClicked = additionnalInsideElementRef?.current.contains(targetElement);
            const hasClickedOutside = !isInsideElementClicked && !isAdditionnalInsideElementClicked;

            if (hasClickedOutside) setCloseAction(false);
        };

        window.addEventListener("mousedown", closingClickEvent);
        window.addEventListener("keydown", closingClickEvent);

        return () => {
            window.removeEventListener("mousedown", closingClickEvent);
            window.removeEventListener("keydown", closingClickEvent);
        };
    });
};

export default useClosingOnClickOutside;
