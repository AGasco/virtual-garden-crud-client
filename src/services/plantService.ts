import { axiosInstance } from '@/api';
import { Plant, PlantForm } from '@/types';

export const getPlants = async () => {
  const response = await axiosInstance.get<Plant[]>('/plants');
  return response.data;
};

export const createPlant = async (plantData: PlantForm) => {
  const response = await axiosInstance.post<Plant>('/plants', plantData);
  return response.data;
};

export const updatePlant = async (plantId: string, updatedData: Plant) => {
  const response = await axiosInstance.put<Plant>(
    `/plants/${plantId}`,
    updatedData
  );
  return response.data;
};

export const deletePlant = async (plantId: string) => {
  const response = await axiosInstance.delete<{ message: string }>(
    `/plants/${plantId}`
  );
  return response.data;
};
