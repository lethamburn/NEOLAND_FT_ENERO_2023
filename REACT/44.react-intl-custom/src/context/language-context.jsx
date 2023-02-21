import { useState, createContext } from "react";
import { IntlProvider } from "react-intl";

import Spanish from "../lang/es.json";
import English from "../lang/en.json";
import French from "../lang/fr.json";
import Klingon from "../lang/kl.json";

export const languageContext = createContext();

const recoverLanguage = () => {
  if (navigator.language === "es-ES") {
    return Spanish;
  } else if (navigator.language === "fr-FR") {
    return French;
  } else if (navigator.language === "en-US") {
    return English;
  } else {
    return Spanish;
  }
};

export const ProviderLanguage = ({ children }) => {
  const [locale, setLocale] = useState(navigator.language);
  const [messages, setMessages] = useState(recoverLanguage());

  const handleLanguage = (ev) => {
    setLocale(ev.target.value);
    setMessages(
      ev.target.value === "fr-FR"
        ? French
        : ev.target.value === "es-ES"
        ? Spanish
        : ev.target.value === "en-US"
        ? English
        : ev.target.value === "Klingon"
        ? Klingon
        : Spanish
    );
  };

  return (
    <languageContext.Provider value={{ locale, handleLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {children}
      </IntlProvider>
    </languageContext.Provider>
  );
};
