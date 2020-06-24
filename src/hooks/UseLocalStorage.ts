import { useState } from 'react';

function useLocalStorage(key: string, initialValue?: string): any {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });

  const setLocalStorage = (value: string): void => {
    setValue(value);
    window.localStorage.setItem(key, value);
  };

  return [storedValue, setLocalStorage];
}

export default useLocalStorage;
