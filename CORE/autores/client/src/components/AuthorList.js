import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuthors, deleteAuthor } from '../api/authorApi';

const AuthorList = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetchAuthors();
  }, []);

  const fetchAuthors = () => {
    getAuthors()
      .then((res) => {
        console.log(res); // Log the entire response object
        if (res.data && res.data.length > 0) {
          console.log(res.data); // Log the authors array
          setAuthors(res.data); // Update authors if data is available
        } else {
          setAuthors([]); // Set empty array if no authors found
        }
      })
      .catch((err) => {
        console.error(err);
        setAuthors([]); // Set empty array in case of error
      });
  };

  const handleDelete = (id) => {
    deleteAuthor(id)
      .then(() => fetchAuthors())
      .catch((err) => console.error(err));
  };

  // Quick check for authors to prevent errors before data is loaded
  if (!authors) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Authors</h2>
      <Link to="/new">Add New Author</Link>
      <ul>
        {authors.length > 0 ? (
          authors.map((author) => (
            <li key={author._id}>
              {author.name} - {author.quote}
              <Link to={`/edit/${author._id}`}>Edit</Link>
              <button onClick={() => handleDelete(author._id)}>Delete</button>
            </li>
          ))
        ) : (
          <li>No authors found</li>
        )}
      </ul>
    </div>
  );
};

export default AuthorList;
