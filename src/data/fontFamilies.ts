type FontFamily = {
    name: string;
    fontFamilyCSSVariable: string;
};

export const fonts: FontFamily[] = [
    {
        name: "Sans Serif",
        fontFamilyCSSVariable: "inter",
    },
    {
        name: "Serif",
        fontFamilyCSSVariable: "lora",
    },
    {
        name: "Mono",
        fontFamilyCSSVariable: "inconsolata",
    },
];