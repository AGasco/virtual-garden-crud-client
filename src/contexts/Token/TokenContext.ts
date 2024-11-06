import { createContext } from 'react';

type Props = {
  token: string | null;
  setToken: (token: string | null) => void;
};

export const TokenContext = createContext<Props>({
  token: null,
  setToken: () => {}
});
