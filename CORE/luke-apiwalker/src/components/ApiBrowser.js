// ApiBrowser.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ApiBrowser = () => {
  const [resource, setResource] = useState('people'); // Default resource
  const [id, setId] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [homeworld, setHomeworld] = useState(null); // State to store homeworld information
  const { id: paramId } = useParams(); // Using useParams to get the id from the URL

  useEffect(() => {
    if (paramId) {
      setId(paramId); // Set id state from the URL parameter
      fetchData(resource, paramId);
    }
  }, [paramId, resource]);

  useEffect(() => {
    if (data && data.homeworld) {
      fetchHomeworld(data.homeworld);
    }
  }, [data]);

  // Fetch data from the API based on the selected resource and id
  const fetchData = async (resource, id) => {
    try {
      const response = await axios.get(`https://swapi.dev/api/${resource}/${id}/`);
      setData(response.data);
      setError(null);
    } catch (error) {
      setData(null);
      setError(error.response?.data?.detail || 'Failed to fetch data.');
    }
  };

  // Fetch the homeworld data based on the homeworld URL in the fetched data
  const fetchHomeworld = async (url) => {
    try {
      const response = await axios.get(url);
      setHomeworld(response.data);
    } catch (error) {
      setHomeworld(null);
      setError(error.response?.data?.detail || 'Failed to fetch homeworld.');
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!id) {
      setError('Please enter an ID.');
      setData(null);
      return;
    }

    fetchData(resource, id);
  };

  // Handle resource selection change
  const handleResourceChange = (e) => {
    setResource(e.target.value);
    setId(''); // Reset ID when changing resource
    setHomeworld(null); // Reset homeworld data
  };

  // Handle ID input change
  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select value={resource} onChange={handleResourceChange}>
          <option value="people">People</option>
          <option value="films">Films</option>
          <option value="planets">Planets</option>
          <option value="species">Species</option>
          <option value="starships">Starships</option>
          <option value="vehicles">Vehicles</option>
        </select>
        <input type="number" value={id} onChange={handleIdChange} placeholder="Enter ID" />
        <button type="submit">Submit</button>
      </form>
      {data && (
        <div>
          <h2>{data.name || data.title}</h2>
          <p>{data.model || data.height || data.diameter || data.director || data.average_lifespan}</p>
          <p>{data.consumables || data.hair_color || data.orbital_period || data.producer || data.designation}</p>
          <p>{data.manufacturer || data.mass || data.population || data.release_date || data.language}</p>
          <p>{data.crew || data.gender || data.climate || data.episode_id || data.classification}</p>
          {resource === 'people' && homeworld && (
            <p>Homeworld: {homeworld.name}</p>
          )}
        </div>
      )}
      {error && (
        <div>
          <p>{error}</p>
          <p>Estos no son los droides que está buscando</p>
          <img src="https://pyxis.nymag.com/v1/imgs/f11/87d/c4cdd594460cf2a3360089f1c845d62b84-obi-wan-kenobi.2x.h473.w710.jpg" alt="Obi-Wan Kenobi" />
        </div>
      )}
    </div>
  );
};

export default ApiBrowser;
