import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CountriesList from './components/countriesList';
import CountryDetail from './components/countryDetail';
import './App.css';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<CountriesList />} />
        <Route path="/country/:name" element={<CountryDetail />} />
      </Routes>
    </main>
  );
}

export default App;
