import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
  const setValue = (value) => {
    //save save to state
    setState(value);
    //save to local storage
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [state, setState];
};

export default useLocalStorage;
