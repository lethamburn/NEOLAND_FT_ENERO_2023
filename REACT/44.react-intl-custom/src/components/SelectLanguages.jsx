import { useContext } from "react";
import { languageContext } from "../context/language-context";

const SelectLanguages = () => {
  const { handleLanguage } = useContext(languageContext);
  return (
    <select onChange={handleLanguage}>
      <option value="es-ES">Spanish</option>
      <option value="fr-FR">French</option>
      <option value="en-US">English</option>
      <option value="Klingon">Klingon</option>
    </select>
  );
};

export default SelectLanguages;
