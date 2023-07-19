import React, { useState } from 'react';
import Popup from './components/popup';

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenPopup}>Open popup</button>
      <Popup isOpen={isPopupOpen} onClose={handleClosePopup} animationType="rotate"
      
      popupWidth="600px"
      popupHeight="300px"
      backgroundColor="#f1f1f1"
      borderRadius="10px"


      
      >
       <h2>Hello</h2>

       <p>It`s popup text!</p>
      </Popup>
    </div>
  );
};

export default App;
