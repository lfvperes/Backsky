import { useState, useEffect } from 'react';
import apiClient from '../services/api';

interface YourData {
  // Define the shape of the data you expect from your API
  id: number;
  name: string;
}

function DataReader() {
  const [data, setData] = useState<YourData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Example: fetching a list of items from '/items' endpoint
        const response = await apiClient.get('/cidades/random/?format=json');
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

  return (
    <div>
      <h1>Data from API</h1>
      <ul>
        {data?.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataReader;