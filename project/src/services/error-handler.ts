import { ERROR_TIMEOUT } from '../const';
import { store } from '../store';
import { setError } from '../store/user-process/user-process';

export const processErrorHandle = (): void => {
  setTimeout(
    () => store.dispatch(setError(false)),
    ERROR_TIMEOUT,
  );
};
