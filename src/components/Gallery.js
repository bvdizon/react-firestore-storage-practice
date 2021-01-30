import React from 'react';
import useFirestore from '../hooks/useFirestore';
import Loading from './Loading';

const Gallery = () => {
  const { docs: images, loading } = useFirestore('gallery');

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      {images &&
        images.map((img) => {
          const { name, title, url } = img;
          return (
            <div>
              <img src={url} alt='' />
              <h3>
                {title} by {name}
              </h3>
            </div>
          );
        })}
    </div>
  );
};

export default Gallery;
