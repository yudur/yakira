import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import translations from './locales'

// Configuração i18n
const i18nConfig = {
	resources: translations, // resources are our translations
	fallbackLng: 'pt-BR', // fallbackLng is the default language if the browser cannot detect it on its own
	defaultNS: 'translations', // defaultNS is the default namespace, we can use 'translations'
}

i18n
	.use(LanguageDetector) // Use your browser's language detector
	.use(initReactI18next) // Use the React-specific i18n package
	.init(i18nConfig) // Use our settings

export default i18n
