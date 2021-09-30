import { useState } from "reat";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
    const [darkMode, setValue] = useLocalStorage("darkMode");
    return []
};


export default useDarkMode;
