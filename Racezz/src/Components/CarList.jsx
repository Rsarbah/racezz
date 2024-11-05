import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

function CarList() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.from('cars').select('*');
        if (error) throw error;
        setCars(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCars();
  }, []);

  const handleDelete = async (id) => {
    await supabase.from('cars').delete().eq('id', id);
    setCars(cars.filter((car) => car.id !== id));
  };

  if (loading) return <p>Loading cars...</p>;
  if (error) return <p>Error fetching cars: {error}</p>;

  return (
    <div className="gallery">
      {cars.map((car) => (
        <div key={car.id} className="car-card">
          <Link to={`/cars/${car.id}`}>
            <h3>{car.name}</h3>
          </Link>
          <p>Speed: {car.speed}</p>
          <p>Acceleration: {car.acceleration}</p>
          <p>Handling: {car.handling}</p>
          <button onClick={() => handleDelete(car.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default CarList;