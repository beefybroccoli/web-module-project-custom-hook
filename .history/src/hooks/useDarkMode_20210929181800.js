import { useState } from "reat";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
    const [value, setValue] = useLocalStorage("darkMo");
    return []
};


export default useDarkMode;
