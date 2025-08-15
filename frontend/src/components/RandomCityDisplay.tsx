import { useState, useEffect } from 'react';
import apiClient from '../services/api';
import { brazilianNumberFormatter } from '../utils/formatters'; // <-- Import the formatter

interface CityData {
  id: number;
  name: string;
  state: string;
  est_pop: number;
  gentilic: string;
}

// Removed the formatter definition from here as it's now in utils/formatters.ts

function RandomCityDisplay() {
  const [city, setCity] = useState<CityData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRandomCity = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await apiClient.get('/cidades/random/?format=json');
      console.log("Random city data:", response.data);
      setCity(response.data);
    } catch (err) {
      setError('Failed to fetch random city');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomCity();
  }, []);

  return (
    <div>
      <h3>Cidade sorteada:</h3>
      {error && <p>Erro: {error}</p>}
      {city ? (
          <div>
          <p>{city.name}, {city.state}</p>
          {/* Use the imported formatter */}
          <p>População: {brazilianNumberFormatter.format(city.est_pop)} {city.gentilic}s</p>
          <p>ID (IBGE): {city.id}</p>
        </div>
      ) : (!loading && !error && <p>Clique no botão para sortear uma cidade.</p>)}

      <button onClick={fetchRandomCity} disabled={loading}>
        Sortear cidade
      </button>
      {loading && <p>Sorteando...</p>}
    </div>
  );
}

export default RandomCityDisplay;