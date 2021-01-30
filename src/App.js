import React from 'react';
import AddForm from './components/AddForm';
import './App.css';
import Gallery from './components/Gallery';

const App = () => {
  return (
    <div>
      <h1>from App component</h1>
      <AddForm />
      <Gallery />
    </div>
  );
};

export default App;
