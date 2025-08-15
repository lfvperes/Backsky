import { useState } from 'react';
import './App.css'
import DataReader from './components/DataReader';
import CitySearchForm from './components/CitySearchForm';
import RandomCityDisplay from './components/RandomCityDisplay';

function App() {
  const [searchParams, setSearchParams] = useState<{ name: string; state: string } | null>(null);

  const handleSearch = (name: string, state: string) => {
    console.log("Searching for:", { name, state });
    setSearchParams({ name, state });
  };

  const clearSearch = () => {
    setSearchParams(null);
  };

  return (
    <div className="app-container"> {/* Main container for overall layout */}
      <h1>Backsky Live Demo</h1>

      <div className="controls-container"> {/* Container for search form and random city controls */}
        <div className="random-city-section"> {/* Section for random city display */}
          <RandomCityDisplay />
        </div>

        <div className="search-section"> {/* Section for search form */}
          <CitySearchForm onSearch={handleSearch} />
          <button onClick={clearSearch} className="clear-button">Limpar busca</button>
        </div>
      </div>

      <hr className="section-divider" />

      {/* Render DataReader only if there are search parameters */}
      {searchParams && <DataReader searchParams={searchParams} />}
    </div>
  )
}

export default App
