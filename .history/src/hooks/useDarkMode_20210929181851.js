import { useState } from "reat";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  const [darkMode, set_darkMode] = useLocalStorage("darkMode");
  return [];
};

export default useDarkMode;
