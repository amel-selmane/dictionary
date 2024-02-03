type FontFamily = {
    name: string;
    fontFamilyValue: string;
    // twConfigValue: string;
};

export const fonts: FontFamily[] = [
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