import React from 'react';
import useStorage from '../hooks/useStorage';

const Loading = ({ file, setFile }) => {
  const { progress, url, error } = useStorage(file);

  if (url) {
    setTimeout(() => {
      setFile(null);
    }, 3000);
  }

  console.log(progress, url, error);
  return (
    <div>
      <h1>
        {progress === 100
          ? 'Upload Complete!'
          : 'Uploading ...' + progress.toFixed(2) + '%'}{' '}
      </h1>
    </div>
  );
};

export default Loading;
