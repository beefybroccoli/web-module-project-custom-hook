import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(()=>{
        const item = window.localStorage.getItem(key);
        return
    });
  return [];
};

export default useLocalStorage;
