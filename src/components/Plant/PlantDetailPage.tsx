import usePlants from '@/hooks/usePlants';
import { deletePlant as deletePlantService } from '@/services';
import { Plant } from '@/types';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DotLoader } from 'react-spinners';

const PlantDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { plants, deletePlant } = usePlants();

  const [plant, setPlant] = useState<Plant | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const foundPlant = plants.find((plant) => plant._id === id);
    if (foundPlant) {
      setPlant(foundPlant);
    } else {
      setError('Plant not found');
    }
  }, [id, plants]);

  const handleDelete = async () => {
    try {
      await deletePlantService(id!);
      deletePlant(id!);
      navigate('/plants');
    } catch (err) {
      setError((err as Error).message || 'Failed to delete plant');
    }
  };

  if (!plant) {
    return error ? <div>{error}</div> : <DotLoader />;
  }

  return (
    <div>
      <h1>{plant.name}</h1>
      <img src={plant.imageUrl} alt={plant.name} />
      <p>Species: {plant.species}</p>
      <p>Status: {plant.status}</p>
      <p>Position: {`[${plant.positionX}, ${plant.positionY}]`}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <button onClick={() => navigate(`/plants/edit/${plant._id}`)}>
        Edit Plant
      </button>
      <button onClick={handleDelete}>Delete Plant</button>
    </div>
  );
};

export default PlantDetailPage;
