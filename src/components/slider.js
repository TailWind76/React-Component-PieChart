import React, { useState,useEffect } from 'react';

const Slider = ({ children, width, height, slideBackgroundColor,autoScroll,PaginActive,PaginBack,PaginSize,autoScrollDelay,slideAnimationDuration, arrowColor,arrowBackgroundColor, arrowSize, leftArrowPosition, rightArrowPosition, arrowsPlacement, sliderPosition, sliderPositionType, sliderPositionOffset, sliderPositionOffsetPreset, showPagination }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + children.length) % children.length);
  };


  useEffect(() => {
    let intervalId = null;

    if (autoScroll) {
      intervalId = setInterval(nextSlide, autoScrollDelay || 3000); // Используем переданное значение или значение по умолчанию 3000 мс (3 секунды)
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [currentIndex, autoScroll, autoScrollDelay]);




  const sliderStyle = {
    position: sliderPositionType || 'relative',
    overflow: 'hidden',
    width: width || '100%',
    height: height || 'auto',
    maxWidth: '800px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: sliderPosition || 'center',
    ...getSliderPositionOffset(),
    ...sliderPositionOffset,
  };

  function getSliderPositionOffset() {
    if (sliderPositionType === 'absolute' || sliderPositionType === 'fixed') {
      switch (sliderPositionOffsetPreset) {
        case 'top':
          return { top: '20px', left: '50%', transform: 'translateX(-50%)' };
        case 'bottom':
          return { bottom: '20px', left: '50%', transform: 'translateX(-50%)' };
        case 'left':
          return { top: '50%', left: '20px', transform: 'translateY(-50%)' };
        case 'right':
          return { top: '50%', right: '20px', transform: 'translateY(-50%)' };
        default:
          return {};
      }
    }
    return {};
  }

  const slidesStyle = {
    display: 'flex',
    transition: `transform ${slideAnimationDuration || '0.3s'} ease-in-out`, // Используем переданное значение или значение по умолчанию '0.3s'
    width: '100%',
    height: '100%',
  };

  const slideStyle = {
    flex: '0 0 100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: slideBackgroundColor || '#f0f0f0',
  };

  const arrowStyle = {
    position: 'absolute',
    width: arrowSize || '50px',
    height: arrowSize || '50px',
    borderRadius: '50%',
    backgroundColor: arrowBackgroundColor || 'rgba(0, 0, 0, 0.5)',
    color: arrowColor || '#000',
    fontSize: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border:'none'
  };

  let arrowPositionStyle = {};
  if (arrowsPlacement === 'top') {
    arrowPositionStyle.top = '10px';
  } else if (arrowsPlacement === 'bottom') {
    arrowPositionStyle.bottom = '10px';
  } else if (arrowsPlacement === 'middle') {
    arrowPositionStyle.top = '50%';
    arrowPositionStyle.transform = 'translateY(-50%)';
  }

  const leftArrowStyle = {
    left: leftArrowPosition || '10px',
    ...arrowPositionStyle,
  };

  const rightArrowStyle = {
    right: rightArrowPosition || '10px',
    ...arrowPositionStyle,
  };

  const paginationStyle = {
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const dotStyle = {
    width: PaginSize || '10px',
    height: PaginSize ||'10px',
    borderRadius: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    margin: '0 5px',
    cursor: 'pointer',
    
  };

  const dots = Array.from({ length: children.length }).map((_, index) => (
    <span
      key={index}
      style={{
        ...dotStyle,
        backgroundColor: index === currentIndex ? PaginActive || 'rgba(0, 0, 0, 0.9)' : PaginBack || 'rgba(0, 0, 0, 0.5)',
      }}
      onClick={() => setCurrentIndex(index)}
    />
  ));

  return (
    <div style={sliderStyle}>
      <div style={{ ...slidesStyle, transform: `translateX(-${currentIndex * 100}%)` }}>
        {React.Children.map(children, (child, index) => (
          <div key={index} style={{ ...slideStyle }}>
            {child}
          </div>
        ))}
      </div>
      {showPagination && <div style={paginationStyle}>{dots}</div>}
      <button onClick={prevSlide} style={{ ...arrowStyle, ...leftArrowStyle }}>
        &#10094;
      </button>
      <button onClick={nextSlide} style={{ ...arrowStyle, ...rightArrowStyle }}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
