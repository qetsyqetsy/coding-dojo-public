import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getAuthorById } from '../api/authorApi';

const AuthorDetail = () => {
  const { id } = useParams();
  const [author, setAuthor] = useState(null);
  const [error, setError] = useState('');
}

export default AuthorDetail;
