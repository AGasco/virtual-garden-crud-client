import { TokenContext } from '@/contexts';
import { useContext } from 'react';

const useToken = () => {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error('useToken must be used within a TokenProvider');
  }

  return context;
};

export default useToken;
