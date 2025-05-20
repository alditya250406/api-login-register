const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

const authRoutes = require('./app/router/router.js');
app.use('/api', authRoutes);

app.get('/', (req, res) => {
  res.send('API berjalan dengan baik');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
