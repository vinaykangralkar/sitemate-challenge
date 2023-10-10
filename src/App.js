import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import apiService from './apiService';

function App() {

  const [entry, setEntry] = useState({
    id: '',
    title: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEntry((prevEntry) => ({
      ...prevEntry,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    apiService.createItem(entry)
    setEntry({ id: '', title: '', description: '' });
  };


  return (
    <div className="App">
      <header className="App-header">
      <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input type="text" name="id" value={entry.id} onChange={handleChange} />
      </label>
      <br />
      <label>
        Title:
        <input type="text" name="title" value={entry.title} onChange={handleChange} />
      </label>
      <br />
      <label>
        Description:
        <textarea name="description" value={entry.description} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Add Entry</button>
      </form>
      </header>
    </div>
  );
}

export default App;
