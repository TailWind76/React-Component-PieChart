
import React from 'react';
import Calendar from './components/calendar';
import './App.css'; 

const App = () => {
  return (
    <div>
      <h1>My Calendar App</h1>
      <Calendar
  height="400px"
  width="600px"
  dayCellBackgroundColor="lightblue"
  dayCellHoverBackgroundColor="lightcoral"
  currentDayCellBackgroundColor="orange"
  dayCellFontSize="1rem"
  currentDayCellFontSize="1.5rem"
/>
    </div>
  );
};

export default App;
