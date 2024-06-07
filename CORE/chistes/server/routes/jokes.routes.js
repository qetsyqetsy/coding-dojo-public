// server/routes/jokes.routes.js
const express = require('express');
const router = express.Router();
const jokesController = require('../controllers/jokes.controller');

// Rutas
router.get('/jokes', jokesController.getAllJokes);
router.get('/jokes/random', jokesController.getRandomJoke); // Ruta para chiste random
router.get('/jokes/:id', jokesController.getJokeById);
router.post('/jokes/new', jokesController.createJoke);
router.put('/jokes/:id', jokesController.updateJoke);
router.delete('/jokes/:id', jokesController.deleteJoke);

module.exports = router;
