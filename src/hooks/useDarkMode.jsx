import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (key, initialValue) => {
  const [darkMode, setDarkMode] = useLocalStorage("dark-mode", false);

  useEffect(() => {
    darkMode
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [darkMode]);

  console.log(darkMode);

  return [darkMode, setDarkMode];
};
export default useDarkMode;
