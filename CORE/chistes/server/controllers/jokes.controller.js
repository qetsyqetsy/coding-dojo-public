// server/controllers/jokes.controller.js
const Joke = require("../models/jokes.model");

// Función para obtener todos los chistes (bromas)
const getAllJokes = async (req, res) => {
    try {
        const jokes = await Joke.find();
        res.status(200).json(jokes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Función para obtener un chiste (broma) por su ID
const getJokeById = async (req, res) => {
    try {
        const joke = await Joke.findById(req.params.id);
        if (!joke) return res.status(404).json({ message: "Chiste no encontrado" });
        res.status(200).json(joke);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Función para crear un nuevo chiste (broma)
const createJoke = async (req, res) => {
    try {
        const newJoke = new Joke(req.body);
        await newJoke.save();
        res.status(201).json(newJoke);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Función para actualizar un chiste (broma) por su ID
const updateJoke = async (req, res) => {
    try {
        const joke = await Joke.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!joke) return res.status(404).json({ message: "Chiste no encontrado" });
        res.status(200).json(joke);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Función para eliminar un chiste (broma) por su ID
const deleteJoke = async (req, res) => {
    try {
        const joke = await Joke.findByIdAndDelete(req.params.id);
        if (!joke) return res.status(404).json({ message: "Chiste no encontrado" });
        res.status(200).json({ message: "Chiste eliminado" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Función para obtener un chiste aleatorio 

const getRandomJoke = async (req, res) => {
    try {
        // Obtener el número total de chistes en la base de datos
        const count = await Joke.countDocuments();

        // Generar un número aleatorio entre 0 y el número total de chistes 
        const randomIndex = Math.floor(Math.random() * count);

        // Obtener un chiste aleatorio usando skip y limit 
        const randomJoke = await Joke.findOne().skip(randomIndex).exec();

        if (!randomJoke) {
            return res.status(404).json({ message: 'No se encontraron chistes.' });
        }

        res.status(200).json(randomJoke);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }

    
};

module.exports = {
    getAllJokes,
    getJokeById,
    createJoke,
    updateJoke,
    deleteJoke,
    getRandomJoke, // Agregar función p chiste aleatorio
};
