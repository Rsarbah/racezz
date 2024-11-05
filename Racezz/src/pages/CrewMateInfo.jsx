import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const CrewMateInfo = () => {
  const { id } = useParams();
  const [crewMate, setCrewMate] = useState(null);

  const fetchCrewMate = async () => {
    const { data, error } = await supabase
      .from('crewmates')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching crew mate:', error);
    } else {
      setCrewMate(data);
    }
  };

  useEffect(() => {
    fetchCrewMate();
  }, [id]);

  if (!crewMate) return <h2>Crew Mate not found!</h2>;

  return (
    <div>
      <h1>{crewMate.name}</h1>
      <p>Attribute: {crewMate.attribute}</p>
      <Link to="/gallery">Back to Gallery</Link>
    </div>
  );
};

export default CrewMateInfo;
