import { MAX_PLANTS } from '@/constants';
import usePlants from '@/hooks/usePlants';
import { createPlant } from '@/services';
import { PlantForm } from '@/types';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialState: PlantForm = {
  name: '',
  species: '',
  imageUrl: ''
};

const CreatePlant = () => {
  const [plantData, setPlantData] = useState<PlantForm>(initialState);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { plants, addPlant } = usePlants();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setPlantData({ ...plantData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (plants.length >= MAX_PLANTS) {
      setError('You have reached the maximum number of plants.');
      return;
    }

    try {
      const newPlant = await createPlant(plantData);
      if (newPlant) {
        // TODO Instead of adding plant in the frontend, maybe it's better if we refetch
        addPlant(newPlant);
        navigate('/plants');
      }
    } catch (err) {
      setError((err as Error).message || 'Failed to create plant');
    }
  };

  return (
    <div>
      <h1>Create A Plant</h1>
      {error && <p style={{ color: 'red' }}> </p>}
      {plants.length >= MAX_PLANTS ? (
        <p>You have reached the maximum number of plants</p>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={plantData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Species Field */}
          <div>
            <label>Species:</label>
            <input
              type="text"
              name="species"
              value={plantData.species}
              onChange={handleChange}
              required
            />
          </div>

          {/* Image URL Field */}
          <div>
            <label>Image URL:</label>
            <input
              type="text"
              name="imageUrl"
              value={plantData.imageUrl}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Create Plant</button>
        </form>
      )}
    </div>
  );
};

export default CreatePlant;
