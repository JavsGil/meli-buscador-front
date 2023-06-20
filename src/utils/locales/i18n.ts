import i18next from "i18next";

import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'es',
        resources: {
            es: {
                translation: {
                    "new": "nuevo",
                    "used": "usado",
                    "not_specified": "no especificado",

                    "USD": "U$S",
                    "UYU": "$",
                }
            }
        }
    });
