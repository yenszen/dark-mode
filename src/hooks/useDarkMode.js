import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export function useDarkMode(key, initialValue) {
  const [feature, setFeature] = useLocalStorage("feature", initialValue);

  useEffect(() => {
    const body = document.querySelector("body");
    feature
      ? body.classList.add("dark-mode")
      : body.classList.remove("dark-mode");
  }, [feature]);

  return [feature, setFeature];
}
