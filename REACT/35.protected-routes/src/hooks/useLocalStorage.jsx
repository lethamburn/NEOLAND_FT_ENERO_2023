/* import { useState } from "react";

//Custom hook encargado de manejar el localStorage
export const useLocalStorage = (keyName, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      //Ponemos window para asegurarnos de que existe el localStorage
      const value = window.localStorage.getItem(keyName);
      if (value) {
        //Parseamos el valor por si es un objeto, array o string
        return JSON.parse(value);
      } else {
        //Si no tiene ya valor le metemos el valor por defecto indicado en los argumentos
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (error) {
      //Si hay algun tipo de error me devuelves el valor por defecto
      return defaultValue;
    }
  });

  const setValue = (newValue) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (error) {
      setStoredValue(newValue);
    }
    return [storedValue, setValue];
  };
};
 */
import { useState } from "react";

export const useLocalStorage = (keyName, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });
  const setValue = (newValue) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {}
    setStoredValue(newValue);
  };
  return [storedValue, setValue];
};
