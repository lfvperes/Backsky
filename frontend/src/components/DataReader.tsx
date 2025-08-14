import { useState, useEffect } from 'react';
import apiClient from '../services/api';

interface YourData {
  id: number;
  name: string;
  state: string;
  est_pop: number;
  gentilic: string;
}

function DataReader() {
  const [data, setData] = useState<YourData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await apiClient.get('/cidades/random/?format=json');

        // Let's log the data to the console!
        console.log(response.data);

        setData(response.data);
      } catch (err) {
        setError('Failed to fetch data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty array means this effect runs once on mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Check if data exists before trying to access its properties
  return (
    <div>
      <p><strong>Cidade escolhida:</strong></p>
      {data ? (
        <div>
          <p>{data.name}, {data.state}<br/>
          {data.est_pop} {data.gentilic}s</p>
          <p><strong>ID:</strong> {data.id}</p>
        </div>
      ) : (
        <p>No data found.</p>
      )}
    </div>
  );
}

export default DataReader;