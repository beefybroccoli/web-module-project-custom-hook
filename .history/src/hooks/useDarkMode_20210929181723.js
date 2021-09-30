import { useState } from "reat";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
    const [value, setValue] = useLocalStorage("key1");
    return []
};


export default useDarkMode;
