import React, { useState, useEffect } from 'react';

const Popup = ({ isOpen, onClose, children, animationType = 'translateY',backgroundColor,borderRadius, popupWidth = '400px', popupHeight = 'auto' })=> {
  const [showPopup, setShowPopup] = useState(isOpen);

  useEffect(() => {
    setShowPopup(isOpen);
  }, [isOpen]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };


  

  const getTransformValue = () => {
    switch (animationType) {
      case 'scale':
        return showPopup ? 'scale(1)' : 'scale(0)';
      case 'translateY':
        return showPopup ? 'translateY(0%)' : 'translateY(-250%)';
      case 'rotate':
        return showPopup ? 'rotate(0deg)' : 'rotate(-180deg)';
      case 'skew':
        return showPopup ? 'skew(0deg)' : 'skew(20deg)';
      case 'fadeInOut':
        return showPopup ? 'scale(1) translateY(0%) opacity(1)' : 'scale(0) translateY(-250%) opacity(0)';
        case 'flip':
          return showPopup ? 'rotateX(0deg)' : 'rotateX(180deg)';
      case 'slideX':
        return showPopup ? 'translateX(0%)' : 'translateX(-250%)';
        
      default:
        return showPopup ? 'translateY(0%)' : 'translateY(-250%)';
    }
  };

  const popupStyle = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: showPopup ? 1 : 0,
      visibility: showPopup ? 'visible' : 'hidden',
      transition: 'opacity 0.5s ease, visibility 0.5s ease',
    },
    popup: {
      backgroundColor: backgroundColor,
      padding: 20,
      borderRadius: borderRadius,
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
      position: 'relative',
      transform: getTransformValue(),
      transition: 'all 0.5s',
      width: popupWidth,
      height: popupHeight,
    },
    close: {
      position: 'absolute',
      top: 5,
      right: 5,
      background: 'none',
      border: 'none',
      fontSize: 20,
      cursor: 'pointer',
      padding: 5,
    },
    content: {},
  };

  return (
    <div style={popupStyle.overlay} onClick={handleOverlayClick}>
      <div style={popupStyle.popup}>
        <button style={popupStyle.close} onClick={onClose}>
          &times;
        </button>
        <div style={popupStyle.content}>{children}</div>
      </div>
    </div>
  );
};

export default Popup;