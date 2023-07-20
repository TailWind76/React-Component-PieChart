import React from 'react';
import PieChart from './components/chart';
import './App.css'
const App = () => {

  const data = [
    { text: 'social media', value: 50 },
    { text: 'ad', value: 25 },
    { text: 'google', value: 15 },
    { text: 'bing', value: 10 },
    { text: 'yahoo!', value: 13 },
  ];
  const blockStyles = {
    fontSize: '18px',
    fontWeight: 'bold',
    height:'30px',
    color: '#333',
    backgroundColor: '#f0f0f0',
    padding: '8px',
    borderRadius: '25px',

    
  };

  const miniBlockStyles = {
    width: '15px',
    height: '15px',
    marginRight: '5px',
    borderRadius: '50%',
    border: '1px solid #999',
  };




  return (
    <div className='wrapper'>
     
     <div>







    
     <PieChart
        data={data}
        blockStyles={blockStyles}
        miniBlockStyles={miniBlockStyles}
        statisticPosition='right'
        diagramSize={300}
      />











    </div>
    </div>
  );
};

export default App;
