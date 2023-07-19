import React from 'react';
import Slider from './components/slider';
import './App.css';
import forest from './components/images/forest4.jpg'
import forest1 from './components/images/forest1.jpg'
import forest2 from './components/images/forest3.jpg'
const App = () => {
  return (



    
    <div className="app">
      <h1>Slider Example</h1>



      <Slider
       width='50%'
      height='60vh'
       slideBackgroundColor="violet"
       arrowSize='40px'
       arrowBackgroundColor='aqua'
       arrowColor='#000'
  arrowBackColor="cyan"
  leftArrowPosition="20px"
  rightArrowPosition="20px"
  arrowsPlacement="middle"
  sliderPositionType="absolute"
  sliderPositionOffsetPreset="top"
  showPagination={true}
  slideAnimationDuration='0.2s'
  autoScroll={true}
  autoScrollDelay={5000}
  PaginActive="#fff"
  PaginBack="#000"
  PaginSize={20}
  >
        <div className="slide-content" style={{ width: '100%', height: '100%' ,backgroundImage:`url(${forest})`, backgroundSize:'cover' }}>
          Slide 1  
        </div>
        <div className="slide-content" style={{ backgroundColor: 'violet', width: '100%', height: '100%' }}>
          Slide 2
        </div>
        <div className="slide-content" style={{ backgroundColor: 'green', width: '100%', height: '100%',backgroundImage:`url(${forest1})`, backgroundSize:'cover' }}>
          Slide 3
        </div>
        <div className="slide-content" style={{ backgroundColor: 'brown', width: '100%', height: '100%', backgroundImage:`url(${forest2})`, backgroundSize:'cover' }}>
          Slide 3
        </div>


      </Slider>
    </div>
  );
};

export default App;
