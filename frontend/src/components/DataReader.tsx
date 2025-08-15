import { useState, useEffect } from 'react';
import apiClient from '../services/api';
import { brazilianNumberFormatter } from '../utils/formatters'; // <-- Import the formatter

interface YourData {
  id: number;
  name: string;
  state: string;
  est_pop: number; // This is the number we want to format
  gentilic: string;
}

// Define the props the component will receive
interface DataReaderProps {
  searchParams: { name: string; state: string } | null;
}

function DataReader({ searchParams }: DataReaderProps) {
  // The data state now holds an array of cities or null
  const [data, setData] = useState<YourData[] | null>(null);
  const [loading, setLoading] = useState(false); // Don't load initially
  const [error, setError] = useState<string | null>(null);

  // This effect runs whenever searchParams changes
  useEffect(() => {
    // Only fetch if there are search parameters
    if (!searchParams) {
      setData(null); // Clear data if search is cleared
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await apiClient.get('/cidades/', {
            params: searchParams,
        });

        console.log("Search results:", response.data);
        setData(response.data);
      } catch (err) {
        setError('Failed to fetch data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchParams]); // Dependency array ensures this runs when searchParams changes

  if (loading) return <p>Buscando...</p>;
  if (error) return <p>Erro: {error}</p>;

  // Initial state before any search is performed
  if (!searchParams) {
    return <p>Digite o nome exato de uma cidade para iniciar sua busca.</p>;
  }

  // Render the list of cities found, or a "not found" message
  return (
    <div>
      <h3>Reultados:</h3>
      {data && data.length > 0 ? (
        <ul>
          {data.map((city) => (
            <li key={city.id}>
              {city.name}, {city.state}. População: {brazilianNumberFormatter.format(city.est_pop)} {city.gentilic}s {/* Use formatter here */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No cities found matching your criteria.</p>
      )}
    </div>
  );
}

export default DataReader;