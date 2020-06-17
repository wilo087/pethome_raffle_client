import { useState } from 'react'

export function useLocalStorage(key: string, initialValue?: string) {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (e) {
      return initialValue
    }
  })

  const setLocalStorage = (value: string) => {
    try {
      setValue(value)
      window.localStorage.setItem(key, value)
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setLocalStorage]
}