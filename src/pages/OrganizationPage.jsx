import React, { useState } from 'react';
import './OrganizationPage.css';

function OrganizationPage() {
  const [organizationName, setOrganizationName] = useState('');
  const [organizationData, setOrganizationData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    setOrganizationName(e.target.value);
  };

  const handleSearch = async () => {
    if (!organizationName) {
      setErrorMessage('Please enter an organization name.');
      setOrganizationData(null);
      return;
    }
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl = `https://api.crunchbase.com/api/v4/entities/organizations/${organizationName}?user_key=b52ad2f80a9a4166a2f8439e922d9f8d&field_ids=permalink,name,also_known_as,short_description,description,founded_on`;
    console.log(proxyUrl + apiUrl)
    try {
      const response = await fetch(proxyUrl + apiUrl);
      console.log(response)
      if (response.status === 200) {
        const data = await response.json();
        console.log(data.properties)
        setOrganizationData(data.properties);
        setErrorMessage('');
      } else {
        setErrorMessage('No such organization found in the database.');
        setOrganizationData(null);
      }
    } catch (error) {
      setErrorMessage('An error occurred while fetching data.');
      setOrganizationData(null);
    }
  };

  return (
    <div className="organization-page">
      <input 
        type="text" 
        value={organizationName} 
        onChange={handleInputChange} 
        placeholder="Enter organization name"
        className="input-field"
      />
      <button onClick={handleSearch} className="search-button">Search</button>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {organizationData && (
        <div className="organization-data">
          <h3>Organization Details</h3>
          <p><strong>Name:</strong> {organizationData.name}</p>
          <p><strong>Also Known As:</strong> {organizationData.also_known_as || 'N/A'}</p>
          <p><strong>Short Description:</strong> {organizationData.short_description}</p>
          <p><strong>Description:</strong> {organizationData.description}</p>
          <p><strong>Founded On:</strong> {organizationData.founded_on || 'N/A'}</p>
        </div>
      )}
    </div>
  );
}

export default OrganizationPage;
