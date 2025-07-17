import { useDispatch, useSelector, useStore } from 'react-redux';
import type { AppDispatch, RootState } from './store'; // онови шлях, якщо потрібно
import type { Store } from 'redux';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<Store<RootState>>();
