'use client'

import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <main style={{ padding: '2rem' }}>
      <h1>JSON Data Viewer</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading JSON...</p>
      )}
    </main>
  );
}