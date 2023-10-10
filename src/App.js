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

  const [entryId, setEntryId] = useState('');

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

  const handleDelete = () => {
    apiService.deleteItem(entryId)
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Create issue</h1>
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

      <h1>Delet Issue</h1>
      {/* <button>Delete</button>
      <input type="text" onChange={(e) => setEntryId(e.target.value)} value={entryId}/> */}
      <label>
        Enter Entry ID:
        <input
          type="text"
          value={entryId}
          onChange={(e) => setEntryId(e.target.value)}
        />
      </label>
      <button onClick={handleDelete}>Delete</button>

      </header>
    </div>
  );
}

export default App;
