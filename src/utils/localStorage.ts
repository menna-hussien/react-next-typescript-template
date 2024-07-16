import { changeLanguage } from '../i18n/changeLanguage';

export const getItem = (key: string): string | null => {
  return localStorage.getItem(key);
};

export const setItem = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};

export const removeItem = (key: string): void => {
  localStorage.removeItem(key);
};

export const clearLocalStorage = async (): Promise<void> => {
  const appCode = getItem('code');
  localStorage.clear();

  try {
    await changeLanguage(appCode ?? 'ar');
  } catch (error) {
    return;
  }
};
