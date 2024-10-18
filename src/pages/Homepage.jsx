import React from 'react';
import './Homepage.css'

function HomePage() {
  return (
    <div className='home-page'>
      <div className="card-container">
        <a href="/people" className="card">People</a>
        <a href="/organization" className="card">Organization</a>
        <a href="/funding" className="card">Funding</a>
      </div>
    </div>
  );
}

export default HomePage;
