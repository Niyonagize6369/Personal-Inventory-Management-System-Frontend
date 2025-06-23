import { LucideImport } from "lucide-react";
import type { Config } from "tailwindcss";
import {createThemes} from "tw-colors";
import colors from "tailwindcss/colors";
import { color } from "@mui/system";
import { create } from "node:domain";

const baseColors = [
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
];
  
const shadeMapping = {
  "50": "900",  
    "100": "800",
    "200": "700",
    "300": "600",
    "400": "500",
    "500": "400",
    "600": "300",
    "700": "200",
    "800": "100",
    "900": "50",
}

const generateThemeObject = (
colors:any, mapping:any, invert = false)=>{
    const theme:any = {}
        baseColors.forEach((color) => {
            theme[color] ={};
            Object.entries(mapping).forEach(([key,value]:any) =>{
                const shadekey = invert ? value : key;
                theme[color][key]= colors[color][shadekey];
            });
        });

        return theme;
    }

    const lightTheme = generateThemeObject(colors, shadeMapping);
    const darkTheme = generateThemeObject(colors, shadeMapping, true);

    const themes = {
        light:{
            ...lightTheme,
            white:"#ffffff",
        },
        dark:{
            ...darkTheme,
            black:colors.gray["50"],
            white:colors.gray["900"],
        }
    }

const Config: Config = {
    darkMode: "class",
    content:[
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        
    ],
    theme: {
        extend: {
        backgroundColor: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
        },
    },
    plugins: [
       createThemes(themes)
    ],
};
export default Config;