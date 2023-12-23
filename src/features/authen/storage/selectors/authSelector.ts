import { getLocal } from "shared/utils/Local";
import { AppState } from "storage/store";

export const getIsAuthenticated = (state: AppState) => {
  const token = getLocal<string>("token");
  return !!token || state.auth.isAuthenticated;
};

export const getUserInfo = (state: AppState): IUser => state.auth.user;
