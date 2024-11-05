import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

const CreateCrewMate = () => {
  const [name, setName] = useState('');
  const [attribute, setAttribute] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase
        .from('crewmates')
        .insert([{ name, attribute }]);

      if (error) throw error;
      console.log('Crew mate created:', data);
      // Clear the form after successful submission
      setName('');
      setAttribute('');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h1>Create Crew Mate</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit} className="crew-mate-form">
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Attribute:
          <input
            type="text"
            value={attribute}
            onChange={(e) => setAttribute(e.target.value)}
            required
          />
        </label>
        <div className="button-container">
          <button type="submit" disabled={loading}>
            {loading ? 'Creating...' : 'Create Crew Mate'}
          </button>
          <button type="button" onClick={() => {/* Logic to cancel or reset */}}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCrewMate;