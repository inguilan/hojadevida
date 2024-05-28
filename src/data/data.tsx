//language
type LanguageType = {
  label: string;
  code: string;
}

export const languageData = (): LanguageType[] => [
  { label: 'English', code: 'en' },
  { label: 'Spanish', code: 'es' }, // Corrección: Cambiado de 'Espanish' a 'Spanish'
];
