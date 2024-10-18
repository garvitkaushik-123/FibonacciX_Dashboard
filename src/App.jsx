import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // styles ke liye ek CSS file banani padegi
import HomePage from './pages/Homepage';
import OrganizationPage from './pages/OrganizationPage';

function NavBar() {
  return (
    <nav className="navbar">
      <h1>Fibonacci<span className="green-text">X</span></h1>
    </nav>
  );
}

function PeoplePage() {
  return <h2>People Page</h2>;
}

function FundingPage() {
  return <h2>Funding Page</h2>;
}

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/organization" element={<OrganizationPage />} />
        <Route path="/funding" element={<FundingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
