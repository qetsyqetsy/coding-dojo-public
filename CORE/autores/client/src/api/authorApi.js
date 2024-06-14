// src/api/authorApi.js

import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/authors'; // Reemplaza con la URL de tu backend

// Obtener todos los autores
export const getAuthors = () => {
  return axios.get(BASE_URL);
};

// Obtener un autor por ID
export const getAuthorById = (id) => {
  return axios.get(`${BASE_URL}/${id}`);
};

// Crear un nuevo autor
export const createAuthor = (author) => {
  return axios.post(BASE_URL, author);
};

// Actualizar un autor existente
export const updateAuthor = (id, author) => {
  return axios.put(`${BASE_URL}/${id}`, author);
};

// Eliminar un autor
export const deleteAuthor = (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};
