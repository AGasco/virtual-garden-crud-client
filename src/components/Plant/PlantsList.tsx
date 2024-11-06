import { ApiError } from '@/api';
import { deletePlant, getPlants } from '@/services/plantService';
import { Plant } from '@/types/types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PlantsList = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const data = await getPlants();
        setPlants(data);
      } catch (err) {
        setError((err as ApiError).message || 'Failed to fetch plants');
      }
    };

    fetchPlants();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deletePlant(id);
      setPlants(plants.filter((plant) => plant._id !== id));
    } catch (err) {
      setError((err as ApiError).message || 'Failed to delete plant');
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Your Plants</h1>
      <Link to="/plants/create">Add New Plant</Link>
      <ul>
        {plants.map((plant) => (
          <li key={plant._id}>
            {plant.name} ({plant.species})
            <Link to={`/plants/edit/${plant._id}`}>Edit</Link>
            <button onClick={() => handleDelete(plant._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlantsList;
