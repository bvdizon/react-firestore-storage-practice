import React, { useState } from 'react';
import Loading from './components/Loading';

const App = () => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const forUpload = e.target.files[0];
    if (forUpload) {
      setFile(forUpload);
    }
  };

  return (
    <div>
      <h2>File uploader</h2>
      <form>
        <label>
          <input type='file' onChange={handleChange} />
        </label>
        <button style={{ display: 'block' }}>Submit</button>
      </form>
      {file && <Loading file={file} setFile={setFile} />}
    </div>
  );
};

export default App;
