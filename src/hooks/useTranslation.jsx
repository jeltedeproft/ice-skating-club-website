import { useLanguage } from "../context/LanguageContext";
import translations from "../util/translations";

export const useTranslation = () => {
  const { language } = useLanguage();

  // Return the dictionary for the current language
  return (key) => translations[language][key] || key;
};
