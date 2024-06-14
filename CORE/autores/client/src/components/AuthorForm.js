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
    if (id === 'new') {
      // Reset form fields if creating new author
      setName('');
      setQuote('');
      setError('');
    } else if (id) {
      getAuthorById(id)
        .then((res) => {
          setName(res.data.name);
          setQuote(res.data.quote);
          setError(''); // Clear any previous error message
        })
        .catch((err) => {
          setError(
            'Sorry, but we could not find the author you are looking for. Would you like to add this author to our database?'
          );
        });
    }
  }, [id]); // Added id as a dependency to useEffect

  const handleSubmit = (e) => {
    e.preventDefault();
    const authorData = { name, quote };

    if (id === 'new') {
      createAuthor(authorData)
        .then(() => navigate('/'))
        .catch((err) => setError(err.response.data.message));
    } else if (id) {
      updateAuthor(id, authorData)
        .then(() => navigate('/'))
        .catch((err) => setError(err.response.data.message));
    }
  };

  const handleCancel = () => {
    navigate(-1); // This will navigate back to the previous location
  };

  return (
    <div>
      <h2>{id === 'new' ? 'Add Author' : 'Edit Author'}</h2>
      {error && (
        <div>
          <p style={{ color: 'red' }}>{error}</p>
          {id !== 'new' && (
            <p>
              <Link to="/new">Create new author</Link>
            </p>
          )}
        </div>
      )}
      {!error && (
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
          <button type="submit">{id === 'new' ? 'Add' : 'Update'}</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default AuthorForm;
