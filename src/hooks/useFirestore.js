import { useEffect, useState } from 'react';
import { projectFirestore } from '../config/config';

const useFirestore = (collection) => {
  const [docs, setDocs] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const unsub = projectFirestore.collection(collection).onSnapshot((snap) => {
      let documents = [];
      snap.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  return { docs, loading };
};

export default useFirestore;
