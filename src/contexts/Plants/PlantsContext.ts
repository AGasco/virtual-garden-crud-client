import { Plant } from '@/types';
import { createContext } from 'react';

type PlantsContextType = {
  plants: Plant[];
  setPlants: (plants: Plant[]) => void;
  addPlant: (plant: Plant) => void;
  updatePlant: (updatedPlant: Plant) => void;
  deletePlant: (plantId: string) => void;
  fetchPlants: () => Promise<void>;
};

export const PlantsContext = createContext<PlantsContextType>({
  plants: [],
  setPlants: () => {},
  addPlant: () => {},
  updatePlant: () => {},
  deletePlant: () => {},
  fetchPlants: async () => {}
});
