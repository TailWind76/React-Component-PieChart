# Autocomplete Component Usage Documentation

The Autocomplete component provides a powerful and customizable autocomplete feature that suggests options based on user input. It allows users to easily select from the suggested options, enhancing the user experience.

## Installation

To use the Autocomplete component in your project, make sure you have React installed, and then run the following command:

```bash
npm install --save react
```

## Import the Component

```jsx
import Autocomplete from './Autocomplete'; // Specify the path to the Autocomplete.js file
```

## Usage

```jsx
<Autocomplete data={['apple', 'banana', 'orange', 'pear']} />
```

## Props

The Autocomplete component supports the following optional props to customize its appearance and behavior:

1. `inputStyles` (object, optional): Sets the styles for the input element. You can use this prop to customize the input's appearance, such as width, font size, and padding.

2. `themePreset` (string, optional): Sets the theme preset for the Autocomplete component. Available options are "light" (default) and "dark". When set to "dark", the component will use dark-themed styles.

3. `suggestionWidth` (string, optional): Sets the width of the suggestion list. By default, it matches the width of the input element.

## Example

```jsx
import React from 'react';
import Autocomplete from './Autocomplete';

const App = () => {
  const customInputStyles = {
    width: '300px',
    padding: '10px',
    fontSize: '18px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  return (
    <div>
      <h1>Autocomplete Example</h1>
      <Autocomplete
        data={['apple', 'banana', 'orange', 'pear']}
        inputStyles={customInputStyles}
        themePreset="dark"
        suggestionWidth="350px"
      />
    </div>
  );
};

export default App;
```

In this example, the Autocomplete component is rendered with custom input styles, a dark theme, and a suggestion list width of 350px. You can adjust the props to customize the appearance and behavior of the Autocomplete component according to your project's requirements. The Autocomplete component will suggest options based on user input and provide an efficient and user-friendly way to select from the suggestions.