const Author = require('../models/authorModel');

module.exports = {
  getAllAuthors: async (req, res) => {
    try {
      const authors = await Author.find().sort({ name: 1 });
      res.json(authors);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  getAuthorById: async (req, res) => {
    try {
      const author = await Author.findById(req.params.id);
      if (!author) {
        return res.status(404).json({ message: 'Author not found' });
      }
      res.json(author);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  createAuthor: async (req, res) => {
    const { name, quote } = req.body;
    try {
      const newAuthor = new Author({ name, quote });
      await newAuthor.save();
      res.status(201).json(newAuthor);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  updateAuthor: async (req, res) => {
    try {
      const { name, quote } = req.body;
      const updatedAuthor = await Author.findByIdAndUpdate(
        req.params.id,
        { name, quote },
        { new: true, runValidators: true }
      );
      if (!updatedAuthor) {
        return res.status(404).json({ message: 'Author not found' });
      }
      res.json(updatedAuthor);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  deleteAuthor: async (req, res) => {
    try {
      const deletedAuthor = await Author.findByIdAndDelete(req.params.id);
      if (!deletedAuthor) {
        return res.status(404).json({ message: 'Author not found' });
      }
      res.json(deletedAuthor);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};
