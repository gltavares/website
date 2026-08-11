import { ui, defaultLang, type Lang } from './ui';

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Build a path prefixed with the locale (default locale has no prefix). */
export function localePath(lang: Lang, path = ''): string {
  const clean = path.replace(/^\/+/, '');
  const prefix = lang === defaultLang ? '' : `${lang}/`;
  return `/${prefix}${clean}`.replace(/\/+$/, '/') || '/';
}

/** The equivalent path for the *other* locale (used by the language switcher). */
export function alternatePath(currentLang: Lang, targetLang: Lang, currentPath: string): string {
  // strip a leading locale segment if present
  const stripped = currentPath.replace(/^\/(en|pt-br)(?=\/|$)/, '');
  return localePath(targetLang, stripped);
}
