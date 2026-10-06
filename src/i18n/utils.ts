import { ui, defaultLang, type Lang } from './ui';

export const PORTFOLIO_PREFIX = 'p';

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

function joinPath(...parts: string[]): string {
  const segments = parts.map((part) => part.replace(/^\/+|\/+$/g, '')).filter(Boolean);
  return `/${segments.join('/')}`;
}

/** Personal website (root) path, prefixed with the locale. */
export function sitePath(lang: Lang, path = ''): string {
  const prefix = lang === defaultLang ? '' : lang;
  return joinPath(prefix, path) || '/';
}

/** Portfolio path under `/p`, prefixed with the locale. */
export function localePath(lang: Lang, path = ''): string {
  const prefix = lang === defaultLang ? PORTFOLIO_PREFIX : `${PORTFOLIO_PREFIX}/${lang}`;
  return joinPath(prefix, path);
}

export function isPortfolioPath(pathname: string): boolean {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  return normalized === `/${PORTFOLIO_PREFIX}` || normalized.startsWith(`/${PORTFOLIO_PREFIX}/`);
}

export function isPortfolioHomePath(pathname: string): boolean {
  const p = pathname.replace(/\/+$/, '') || '/';
  return p === `/${PORTFOLIO_PREFIX}` || p === `/${PORTFOLIO_PREFIX}/en`;
}

/** The equivalent path for the *other* locale (used by the language switcher). */
export function alternatePath(currentLang: Lang, targetLang: Lang, currentPath: string): string {
  const normalized = currentPath.replace(/\/+$/, '') || '/';
  const portfolio = isPortfolioPath(normalized);
  let stripped = normalized;
  if (portfolio) stripped = stripped.replace(/^\/p(?=\/|$)/, '') || '/';
  stripped = stripped.replace(/^\/(en|pt-br)(?=\/|$)/, '');
  const rest = stripped.replace(/^\/+/, '');
  return portfolio ? localePath(targetLang, rest) : sitePath(targetLang, rest);
}
