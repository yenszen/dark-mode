import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export function useDarkMode(key, initialValue) {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", initialValue);

  useEffect(() => {
    const body = document.querySelector("body");
    darkMode
      ? body.classList.add("dark-mode")
      : body.classList.remove("dark-mode");
  }, [darkMode]);

  return [darkMode, setDarkMode];
}
