import { getPlants } from '@/services';
import { Plant } from '@/types';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import { PlantsContext } from './PlantsContext';

type Props = {
  children: ReactNode;
};

export const PlantsProvider = ({ children }: Props) => {
  const [plants, setPlantsState] = useState<Plant[]>([]);

  const fetchPlants = useCallback(async () => {
    try {
      const data = await getPlants();
      setPlantsState(data);
    } catch (err) {
      console.error('Failed to fetch plants:', err);
    }
  }, []);

  useEffect(() => {
    fetchPlants();
  }, [fetchPlants]);

  const setPlants = (plants: Plant[]) => {
    setPlantsState(plants);
  };

  const addPlant = (newPlant: Plant) => {
    setPlantsState([...plants, newPlant]);
  };

  const updatePlant = (updatedPlant: Plant) => {
    setPlantsState(
      plants.map((plant) =>
        plant._id === updatedPlant._id ? updatedPlant : plant
      )
    );
  };

  const deletePlant = (plantId: string) => {
    setPlantsState(plants.filter((plant) => plant._id !== plantId));
  };

  return (
    <PlantsContext.Provider
      value={{
        plants,
        setPlants,
        addPlant,
        updatePlant,
        deletePlant,
        fetchPlants
      }}
    >
      {children}
    </PlantsContext.Provider>
  );
};
