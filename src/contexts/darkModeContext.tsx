import { createContext, useState } from "react";

export const DarkModeContext = createContext(null);

export const DarkModeProvider = ({ children }) => {
    const [isDarkMode, setDarkMode] = useState<boolean>(false);

    const toggleDarkMode = () => setDarkMode(!isDarkMode);

    return <DarkModeContext.Provider value={[isDarkMode, toggleDarkMode]}>{children}</DarkModeContext.Provider>;
};
