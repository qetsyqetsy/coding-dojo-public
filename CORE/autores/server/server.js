const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

require('./config/database');

app.use(cors());
app.use(express.json());

const authorRoutes = require('./routes/authorRoutes');
app.use('/api', authorRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
