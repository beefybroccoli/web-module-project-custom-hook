import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(()=>{
        const item = window.localStorage.getItem(key);
        return item? JSON.parse(item)
    });
  return [];
};

export default useLocalStorage;
