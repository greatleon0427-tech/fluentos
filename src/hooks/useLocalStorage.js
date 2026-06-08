import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue, legacyKey) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      if (stored) return JSON.parse(stored);

      const legacyStored = legacyKey ? window.localStorage.getItem(legacyKey) : null;
      return legacyStored ? JSON.parse(legacyStored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
