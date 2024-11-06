import { PlantsContext } from '@/contexts';
import { useContext } from 'react';

const usePlants = () => {
  const context = useContext(PlantsContext);
  if (!context) {
    throw new Error('usePlants must be used within a PlantsProvider');
  }

  return context;
};

export default usePlants;
