import { TOKEN } from '@/constants';
import { useState, useEffect, ReactNode } from 'react';
import { TokenContext } from './TokenContext';

type Props = {
  children: ReactNode;
};

export const TokenProvider = ({ children }: Props) => {
  const [token, setTokenState] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem(TOKEN);
    if (storedToken) setToken(storedToken);
  }, []);

  const setToken = (newToken: string | null) => {
    if (newToken) localStorage.setItem(TOKEN, newToken);
    else localStorage.removeItem(TOKEN);

    setTokenState(newToken);
  };

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};
