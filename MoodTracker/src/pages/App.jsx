import React from 'react';
import MoodInput from '../components/MoodInput.jsx';
import MoodFeed from '../components/MoodFeed.jsx';

const App = () => (
  <div className="app-container">
    <h1>Mood Tracker :)</h1>
    <MoodInput />
    <MoodFeed />
  </div>
);

export default App;