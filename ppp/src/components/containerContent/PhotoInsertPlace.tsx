import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

interface PhotoInsertPlaceProps {}

const PhotoInsertPlace: React.FC<PhotoInsertPlaceProps> = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setSelectedImage(reader.result.toString());
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 auto',
        marginTop: '50px',
        textAlign: 'center',
        gap: 2,
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        {selectedImage ? 'Choose another image if you like' : 'First, choose an image'}
      </Typography>
      <label htmlFor="file-upload">
        <Box
          component="img"
          src={selectedImage || `${process.env.PUBLIC_URL}/addImage.jpg`}
          alt={selectedImage ? "Selected Photo" : "Add"}
          sx={{
            cursor: 'pointer',
            borderRadius: '16px',
            maxWidth: { xs: '100%', sm: '300px', md: '600px' },
            maxHeight: { xs: '200px', sm: '300px', md: '400px' },
            objectFit: 'cover',
            border: '2px solid #ccc',
          }}
        />
      </label>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />
    </Box>
  );
};

export default PhotoInsertPlace;
