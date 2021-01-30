import React, { useState } from 'react';
import { projectFirestore, timestamp } from '../config/config';
import useStorage from '../hooks/useStorage';

const AddForm = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [photo, setPhoto] = useState(null);

  const { url } = useStorage(photo);

  const handleChangeFile = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (url) {
      projectFirestore.collection('gallery').add({
        createdAt: timestamp(),
        name,
        title,
        url: url,
      });

      setName('');
      setTitle('');
      setPhoto(null);
    }
  };

  return (
    <div className='form-container'>
      <h3>Add your best capture!</h3>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Photographer'
          required
        />
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='About the photo'
          required
        />
        <input type='file' onChange={handleChangeFile} />
        <button>Add Entry</button>
      </form>
    </div>
  );
};

export default AddForm;
