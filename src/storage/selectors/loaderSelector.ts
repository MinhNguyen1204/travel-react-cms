import { AppState } from "storage/store";
import { Loader } from "storage/types/slices";
import { Selector } from '@reduxjs/toolkit';

export const getLoaderState: Selector<AppState, Loader> = (state: AppState) => state.loader;
