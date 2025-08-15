import React, { useState } from 'react';

interface CitySearchFormProps {
  onSearch: (name: string, state: string) => void;
}

function CitySearchForm({ onSearch }: CitySearchFormProps) {
  const [name, setName] = useState('');
  const [state, setState] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(name, state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Buscar cidades</h2>
      <div>
        <label htmlFor="cityName">Cidade: </label>
        <input
          type="text"
          id="cityName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="stateCode">Estado: </label>
        <input
          type="text"
          id="stateCode"
          value={state}
          onChange={(e) => setState(e.target.value)}
          // Consider adding maxLength="2" here if you only want 2-letter state codes
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
}

export default CitySearchForm;

