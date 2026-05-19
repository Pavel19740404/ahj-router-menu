import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import { HomePage, DriftPage, TimeAttackPage, ForzaPage } from './Pages';
import './App.css';

function App() {
  return (
    <div className="app">
      <Menu />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
