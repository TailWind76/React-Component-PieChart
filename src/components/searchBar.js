import React, { useState } from 'react';

const Autocomplete = ({ data, inputStyles, themePreset, suggestionWidth }) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

   
    const filteredSuggestions = data.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
 
    setInputValue(suggestion);
   
    setSuggestions([]);
  };

  const handleSuggestionHover = (index) => {
   
    setHoveredIndex(index);
  };

  const closeSuggestions = () => {
    
    if (inputValue.trim() === '') {
      setSuggestions([]);
    }
  };

  
  const getThemeStyles = () => {
    if (themePreset === 'dark') {
      return {
        backgroundColor: '#333', 
        color: '#fff',
      };
    } else {
      return {
        backgroundColor: '#f7f7f7',
        color: '#333',
      };
    }
  };

  
  const suggestionsWidth = suggestionWidth ? suggestionWidth : (inputStyles && inputStyles.width) ? inputStyles.width : '300px';

  return (
    <div style={{ position: 'relative', width: suggestionsWidth }}>
      <div style={{ position: 'relative' }}>
     
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke={themePreset === 'dark' ? '#fff' : '#000'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            position: 'absolute',
            top: '8px',
            left: '8px',
            pointerEvents: 'none',
          }}
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={closeSuggestions} 
          style={{
            ...defaultInputStyles,
            ...getThemeStyles(), 
            ...inputStyles,
            paddingLeft: '8%', 
          }}
        />
      </div>
      <ul
        style={{
          listStyle: 'none',
          padding: '0',
          margin: '0',
          position: 'absolute',
          width: suggestionsWidth, 
          zIndex: '1',
          opacity: suggestions.length > 0 ? '1' : '0',
          transform: `translateY(${suggestions.length > 0 ? '0' : '-10px'})`,
          pointerEvents: suggestions.length > 0 ? 'auto' : 'none',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          paddingLeft: '8%',
          ...getThemeStyles(), 
        }}
      >
        {suggestions.map((suggestion, index) => (
          <li
            key={index}
            onClick={() => handleSuggestionClick(suggestion)}
            style={{
              backgroundColor: hoveredIndex === index ? (themePreset === 'dark' ? '#444' : '#e0e0e0') : (themePreset === 'dark' ? '#222' : '#f0f0f0'), // Чуть потемнее цвет для темной темы
              padding: '8px',
              cursor: 'pointer',
            }}
            onMouseOver={() => handleSuggestionHover(index)}
            onMouseLeave={() => handleSuggestionHover(-1)}
          >
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};


const defaultInputStyles = {
  width: '100%',
  padding: '8px',
  fontSize: '16px',
};

export default Autocomplete;
