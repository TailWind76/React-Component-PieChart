# Calendar Component Usage Documentation

The Calendar component provides a customizable and visually appealing calendar that allows users to select specific dates. It also indicates the current date on the calendar for easy reference.

## Installation

To use the Calendar component in your project, make sure you have React installed, and then run the following command:

```bash
npm install --save react
```

## Import the Component

```jsx
import Calendar from './Calendar'; // Specify the path to the Calendar.js file
```

## Usage

```jsx
<Calendar />
```

## Props

The Calendar component supports the following optional props to customize its appearance and behavior:

1. `height` (string, optional): Sets the height of the calendar. Default: "500px".

2. `width` (string, optional): Sets the width of the calendar. Default: "700px".

3. `dayCellBackgroundColor` (string, optional): Sets the background color of the individual day cells in the calendar. Default: "transparent".

4. `dayCellHoverBackgroundColor` (string, optional): Sets the background color of the individual day cells when hovered over. Default: "orange".

5. `currentDayCellBackgroundColor` (string, optional): Sets the background color of the current day cell. Default: "orange".

6. `dayCellFontSize` (string, optional): Sets the font size of the text inside the individual day cells. Default: "1rem".

7. `currentDayCellFontSize` (string, optional): Sets the font size of the text inside the current day cell. Default: "1.2rem".

## Example

```jsx
import React from 'react';
import Calendar from './Calendar';

const App = () => {
  return (
    <div>
      <h1>My Calendar App</h1>
      <Calendar
        height="600px"
        width="800px"
        dayCellBackgroundColor="#f0f0f0"
        dayCellHoverBackgroundColor="#a3a3a3"
        currentDayCellBackgroundColor="#ff6666"
        dayCellFontSize="1.1rem"
        currentDayCellFontSize="1.4rem"
      />
    </div>
  );
};

export default App;
```

In this example, the Calendar component is rendered with custom height, width, background colors, and font sizes. You can adjust the props to customize the appearance of the calendar according to your project's needs. The calendar allows users to select specific dates and visually indicates the current date, providing a great user experience.