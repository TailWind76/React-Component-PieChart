import React from 'react';
import Autocomplete from './components/searchBar';
import './App.css'
const App = () => {
  const data = ['Apple', 'Banana', 'Cherry','Date', 'Grape'];

  const customInputStyles = {
    width: '500px',
    height:'30px',
    fontSize: '20px',
    borderRadius:'10px',
    border:'none',
    
  };

  return (
    <div className='wrapper'>
      <h1>Autocomplete Example</h1>
      <Autocomplete data={data} inputStyles={customInputStyles} themePreset="dark" />

      <Autocomplete data={data}   inputStyles={customInputStyles} themePreset="light" />

    

    </div>
  );
};

export default App;
