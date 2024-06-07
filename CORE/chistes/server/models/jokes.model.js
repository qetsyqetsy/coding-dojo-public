// server/models/jokes.model.js 
const mongoose = require('mongoose');

// Define the Joke schema 
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: true
    },
    punchline: {
        type: String,
        required: true
    },
}, { timeStamps: true });

// Export the Mongoose model
module.exports = mongoose.model('Joke', JokeSchema)