# Popup Component Usage Documentation

The Popup component provides a customizable modal popup that can be shown or hidden. It supports various animation types to create visually appealing transitions.

## Installation

To use the Popup component in your project, make sure you have React installed, and then run the following command:

```bash
npm install --save react
```

## Import the Component

```jsx
import Popup from './Popup'; // Specify the path to the Popup.js file
```

## Usage

```jsx
<Popup
  isOpen={/* Boolean indicating whether the popup is open or closed */}
  onClose={/* Function to close the popup */}
  animationType="translateY" // You can set it to any supported animation type: "scale", "translateY", "rotate", "skew", "fadeInOut", "slideX", "flip"
>
  {/* Your popup content goes here */}
</Popup>
```

## Props

The Popup component supports the following props to customize its appearance and behavior:

1. `isOpen` (boolean, required): Indicates whether the popup is open or closed. Set this prop to `true` to open the popup and `false` to close it.

2. `onClose` (function, required): A callback function to be called when the user clicks outside the popup or on the close button to close the popup.

3. `animationType` (string, optional): Sets the type of animation to use when the popup is shown or hidden. Supported values: "scale", "translateY", "rotate", "skew", "fadeInOut", "slideX", "flip". Default: "translateY".

4. `popupWidth` (string, optional): Sets the width of the popup. Default: "400px".

5. `popupHeight` (string, optional): Sets the height of the popup. Default: "auto".

6. `backgroundColor` (string, optional): Sets the background color of the popup. Default: "#ffffff" (white).

7. `borderRadius` (string, optional): Sets the border radius of the popup. Default: "5px".

## Example

```jsx
import React, { useState } from 'react';
import Popup from './Popup';

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
      <button onClick={handleOpenPopup}>Open Popup</button>
      <Popup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        animationType="fadeInOut"
        popupWidth="600px"
        popupHeight="300px"
        backgroundColor="#f1f1f1"
        borderRadius="10px"
      >
        <h2>Popup Content</h2>
        <p>This is a sample popup content.</p>
        <button onClick={handleClosePopup}>Close</button>
      </Popup>
    </div>
  );
};

export default App;
```

You can use the Popup component's props to control when the popup is shown or hidden and customize the animation type, size, background color, and border radius for a smooth visual effect. The popup content can be fully customized to suit your needs.