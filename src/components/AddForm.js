import React, { useState } from 'react';
import { projectFirestore, timestamp } from '../config/config';

const AddForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    projectFirestore.collection('shohoku').add({
      createdAt: timestamp(),
      name,
      position: 'reserved',
    });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='file' />

      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button>Add Player</button>
    </form>
  );
};

export default AddForm;
