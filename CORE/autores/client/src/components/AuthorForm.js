import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { createAuthor, getAuthorById, updateAuthor } from '../api/authorApi';

const AuthorForm = () => {
  const [name, setName] = useState('');
  const [quote, setQuote] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getAuthorById(id)
        .then((res) => {
          setName(res.data.name);
          setQuote(res.data.quote);
        })
        .catch((err) => {
          setError('Author not found');
        });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const authorData = { name, quote };

    if (id) {
      updateAuthor(id, authorData)
        .then(() => navigate('/'))
        .catch((err) => setError(err.response.data.message));
    } else {
      createAuthor(authorData)
        .then(() => navigate('/'))
        .catch((err) => setError(err.response.data.message));
    }
  };

  const handleCancel = () => {
    navigate(-1); // This will navigate back to the previous location
  };

  return (
    <div>
      <h2>{id ? 'Edit Author' : 'Add Author'}</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Quote:
          <input
            type="text"
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">{id ? 'Update' : 'Add'}</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
      {error && (
        <p>
          An error occured. Clicnk <Link to="/new/">here</Link> to go to the author page.
        </p>
      )}
    </div>
  );
};

export default AuthorForm;
