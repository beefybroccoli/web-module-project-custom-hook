import { useState } from "reat";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
    const [value, setValue] = useLocalStorage("darkMode");
    return []
};


export default useDarkMode;
