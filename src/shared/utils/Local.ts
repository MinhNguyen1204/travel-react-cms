import cookies from "js-cookie";

export const getLocal = <T>(key: string): T | null => {
  if (!window || !key) return null;
  const result = window.localStorage.getItem(key);
  if (!result) return null;
  return JSON.parse(result);
};

export const setLocal = <T>(key: string, data: T): void => {
  if (!window || !key) return;
  window.localStorage.set(key, JSON.stringify(data));
};

export const removeLocalByKey = (key: string): void => {
  if (!window || !key) return;
  window.localStorage.removeItem(key);
};

export const clearLocal = (): void => {
  window.localStorage.clear();
};

export const getSessionStorage = <T>(key: string): T | null => {
  if (typeof window === "undefined" || !key) return null;
  const result = window.sessionStorage.getItem(key);
  if (!result) return null;
  return JSON.parse(result);
};

export const setSessionStorage = <T>(key: string, data: T) => {
  if (typeof window === "undefined" || !key || !data) return;

  return window.sessionStorage.setItem(key, JSON.stringify(data));
};

export const removeSessionStorage = (key: string) => {
  if (typeof window === "undefined") return;

  return window.sessionStorage.removeItem(key);
};

export function getCookie<T>(key: string): T | null {
  const result = cookies.get(key);
  if (result) {
    return JSON.parse(result);
  }

  return null;
}

export function setCookie<T>(key: string, value: T, expires = 31536000) {
  const expiredTime = new Date(new Date().getTime() + expires * 1000);
  return cookies.set(key, JSON.stringify(value), {
    expires: expiredTime,
    sameSite: "none",
    secure: true,
  });
}
