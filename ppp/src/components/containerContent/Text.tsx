import React, { useState, useEffect } from 'react';
import { Typography, Box ,Grid } from '@mui/material';

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
    <Box sx={{  textAlign: 'left' }}>
       <Grid container spacing={2}>
       <Grid item xs={12} md={7}>
      <Typography
        variant="body1"
        component="div"
        sx={{
          fontSize: '30px',
          fontWeight: 'bold',
          margin: '0 auto', 
          maxWidth: { sm: '100%', md: '100%' }, 
          marginLeft: '30px',
          marginTop: '100px',
          fontFamily: 'cursive',
        }}
      >
       
        {displayText}
        {showCursor && <span style={{ animation: 'blink-caret 1s step-end infinite' }}>|</span>}
        </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
        <Box
            component="img"
            sx={{
              width: '100%', 
              maxWidth: { sm: '100%', md: '80%' }, 
              height: 'auto', 
              margin: '0 auto', 
              display: 'block', 
              marginTop: '50px',
              marginBottom: '50px',
              borderRadius: '16px',
            }}
            src={`${process.env.PUBLIC_URL}/photo2.jpg`} // Update with your image file name
            alt="Description of image"
          />
        </Grid>
        </Grid>
     
    </Box>
  );
};

export default TextContent;
