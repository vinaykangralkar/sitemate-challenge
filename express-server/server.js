
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001; 

app.use(cors());

app.use(bodyParser.json());

// Dummy data to simulate a database
let entries = [];

// Endpoint for creating an entry
app.post('/create', (req, res) => {
  const newEntry = req.body;
  entries.push(newEntry);
  console.log('New issue created',newEntry)
  res.json(newEntry);
});

// Endpoint for reading all entries
app.get('/read', (req, res) => {
  console.log('All entries: ',entries)
  res.json(entries);
});

// Endpoint for updating an entry
app.put('/entries/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedEntry = req.body;

  entries = entries.map((entry) => (entry.id === id ? updatedEntry : entry));

  res.json(updatedEntry);
});

// Endpoint for deleting an entry
app.delete('/delete/:id', (req, res) => {
  const id = parseInt(req.params.id);

  entries = entries.filter((entry) => entry.id !== String(id));

  console.log('Entry deleted:', entries)
  res.json({ message: 'Entry deleted successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
