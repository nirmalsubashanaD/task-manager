const express = require('express');
const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).send('Healthy!');
});

app.get('/favicon.ico', (req, res) => {
  res.status(204).end(); // No content for favicon
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});