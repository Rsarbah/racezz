import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import CarList from '../Components/CarList';
import '../pages/Gallery.css';

const CrewMateGallery = () => {
  const [crewMates, setCrewMates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCrewMates = async () => {
    console.log('Fetching crew mates...');
    try {
      const { data, error } = await supabase
        .from('crewmates')
        .select('*');

      if (error) {
        console.error('Error fetching crew mates:', error);
        setError(error.message); // Set error message to state for display
      } else {
        console.log('Fetched crew mates:', data);
        setCrewMates(data);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteCrewMate = async (id) => {
    const { error } = await supabase
      .from('crewmates')
      .delete()
      .eq('id', id);
  
    if (error) {
      console.error('Error deleting crew mate:', error);
    } else {
      setCrewMates(crewMates.filter((crewMate) => crewMate.id !== id));
    }
  };

  useEffect(() => {
    fetchCrewMates();
  }, []);

  if (loading) return <p>Loading crew mates...</p>;
  if (error) return <p>Error fetching crew mates: {error}</p>;

  return (
    <div className="gallery">
      <h1>Crew Mate Gallery</h1>
      <div className="card-container">
        {crewMates.length === 0 ? (
          <p>No crew mates found!</p>
        ) : (
          crewMates.map((crewMate) => (
            <div key={crewMate.id} className="card">
              <Link to={`/crewmate/${crewMate.id}`}>
                <h2>{crewMate.name}</h2>
              </Link>
              <p>Attribute: {crewMate.attribute}</p>
              <button onClick={() => deleteCrewMate(crewMate.id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CrewMateGallery;