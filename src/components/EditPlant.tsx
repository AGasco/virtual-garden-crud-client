import { ApiError } from '@/api';
import { getPlant, updatePlant } from '@/services';
import { PlantForm } from '@/types';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DotLoader } from 'react-spinners';

const initialState = {
  name: '',
  species: '',
  imageUrl: ''
};

const EditPlant = () => {
  const { id } = useParams();
  const [plantData, setPlantData] = useState<PlantForm>(initialState);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlant = async () => {
      try {
        setLoading(true);
        const plant = await getPlant(id!);

        if (plant) {
          setPlantData({
            name: plant.name,
            species: plant.species,
            imageUrl: plant.imageUrl
          });
        } else {
          setError('Plant not found');
        }
      } catch (err: unknown) {
        setError((err as ApiError).message || 'Failed to fetch plant');
      }

      setLoading(false);
    };

    if (id) fetchPlant();
  }, [id]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setPlantData({ ...plantData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await updatePlant(id!, plantData);
      navigate('/plants');
    } catch (err) {
      setError((err as ApiError).message || 'Failed to update plant');
    }
  };

  if (isLoading) {
    return <DotLoader />;
  }

  return (
    <div>
      <h2>Edit Plant #{id}</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
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

        <button type="submit">Update Plant</button>
      </form>
    </div>
  );
};

export default EditPlant;
