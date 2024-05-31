import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';

const textToType = `Discover our innovative platform where AI recommends photos based on your input.
Elevate your visual experience with our advanced technology and curated image suggestions.`;

const TextContent: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const displayTextInterval = setInterval(() => {
      if (displayText.length < textToType.length) {
        setDisplayText((prevText) => prevText + textToType.charAt(prevText.length));
      } else {
        clearInterval(displayTextInterval);
      }
    }, 30); // Adjust the interval as needed for typing speed

    return () => clearInterval(displayTextInterval);
  }, []);

  // Simulate blinking cursor every 500ms
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <Box sx={{ marginTop: '100px', textAlign: 'left' }}>
      <Typography
        variant="body1"
        component="div"
        sx={{
          fontSize: '30px',
          fontWeight: 'bold',
          margin: '0 auto', 
          maxWidth: { sm: '100%', md: '95%' }, // Adjust width based on screen size
        }}
      >
        {displayText}
        {showCursor && <span style={{ animation: 'blink-caret 1s step-end infinite' }}>|</span>}
      </Typography>
    </Box>
  );
};

export default TextContent;
