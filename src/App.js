import React from 'react';
import PieChart from './components/chart';
import './App.css'
const App = () => {

  const data = [
    { text: 'social', value: 50 },
    { text: 'ad', value: 25 },
    { text: 'google', value: 15 },
    { text: 'bing', value: 10 },
    { text: 'yahoo!', value: 13 },
    { text: 'google', value: 15 },
    { text: 'bing', value: 10 },
    { text: 'yahoo!', value: 13 },

    
  ];
  const blockStyles = {
    fontSize: '17px',
    fontWeight: 'bold',
    height:'30px',
    color: '#333',
    width:'120px',
    backgroundColor: '#f0f0f0',
    padding: '8px',
    borderRadius: '25px',
    display:'flex',
    

    
  };

  const miniBlockStyles = {
    width: '5%',
    height: '15px',
    marginRight: '5px',
    borderRadius: '30%',
    border: '1px solid #999',
  };




  return (
    <div className='wrapper'>
     
     <div>







    
     <PieChart
        data={data}
        blockStyles={blockStyles}
        miniBlockStyles={miniBlockStyles}
        statisticPosition='top'
        diagramSize={350}
        StatisticWrapperWidth='300px'
      />











    </div>
    </div>
  );
};

export default App;
