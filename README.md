# PieChart Component Usage Documentation

The PieChart component is a versatile and customizable data visualization tool that displays data in a circular chart, allowing users to visualize proportions and percentages of different elements in a dataset.

## Installation

To use the PieChart component in your project, make sure you have React installed, and then run the following command:

```bash
npm install --save react
```

## Import the Component

```jsx
import PieChart from './PieChart'; // Specify the path to the PieChart.js file
```

## Usage

```jsx
import React from 'react';
import PieChart from './PieChart';

const App = () => {
  const data = [
    { text: 'A', value: 30 },
    { text: 'B', value: 20 },
    { text: 'C', value: 50 },
  ];

  return (
    <div>
      <h1>PieChart Example</h1>
      <PieChart data={data} />
    </div>
  );
};

export default App;
```

## Props

The PieChart component supports the following optional props to customize its appearance and behavior:

1. `blockStyles` (object, optional): Sets the styles for the individual blocks displaying data labels and percentages. Use this prop to customize the appearance of each data block, such as font size, margin, or alignment.

2. `miniBlockStyles` (object, optional): Sets the styles for the mini-blocks representing data elements with random colors. You can use this prop to customize the appearance of the mini-blocks, such as width, height, or border radius.

3. `diagramSize` (number, optional, default: 400): Sets the size of the PieChart diagram. This prop allows you to adjust the size of the circular diagram according to your design requirements.

4. `statisticPosition` (string, optional, default: 'bottom'): Sets the position of the statistic block relative to the diagram. Available options are "left" (row), "right" (row-reverse), "top" (column), and "bottom" (column-reverse). Use this prop to control the positioning of the statistic block.

5. `StatisticWrapperWidth` (string,optional,default: 'none'): Sets the width of the container for statistics blocks
## Example

```jsx
import React from 'react';
import PieChart from './PieChart';

const App = () => {
  const data = [
    { text: 'A', value: 30 },
    { text: 'B', value: 20 },
    { text: 'C', value: 50 },
  ];

  const customBlockStyles = {
    marginBottom: '8px',
    fontSize: '14px',
    fontWeight: 'bold',
  };

  const customMiniBlockStyles = {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    marginRight: '6px',
  };

  return (
    <div>
      <h1>PieChart Example</h1>
      <PieChart
        data={data}
        blockStyles={customBlockStyles}
        miniBlockStyles={customMiniBlockStyles}
        diagramSize={500}
        statisticPosition="right"
        StatisticWrapperWidth='300px'
      />
    </div>
  );
};

export default App;
```

In this example, the PieChart component is rendered with custom block and mini-block styles, a diagram size of 500x500 pixels, and the statistic block positioned on the right side of the diagram. You can adjust the props to customize the appearance and behavior of the PieChart component according to your project's requirements. The PieChart component will render a circular chart with random colors representing different data elements and display corresponding data labels and percentages for each element.