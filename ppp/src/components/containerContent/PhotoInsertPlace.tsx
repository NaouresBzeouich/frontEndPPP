import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";

interface PhotoInsertPlaceProps {
  onUpload: (imageData: string) => void;
}

const PhotoInsertPlace: React.FC<PhotoInsertPlaceProps> = ({ onUpload }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const storedImage = localStorage.getItem("selectedImage");
    if (storedImage) {
      setSelectedImage(storedImage);
    }
  }, []);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          const imageData = reader.result.toString();
          setSelectedImage(imageData);
          localStorage.setItem("selectedImage", imageData);
          onUpload(imageData);
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <Box
      sx={{
        margin: "0 auto",
        maxWidth: { sm: "100%", md: "100%" },
        marginLeft: "20px",
        marginTop: "50px",
        marginBottom: "50px",
        textAlign: "center",
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        {selectedImage
          ? "Choose another image if you like"
          : "First, choose an image"}
      </Typography>
      <label htmlFor="file-upload">
        <Box
          component="img"
          src={selectedImage || `${process.env.PUBLIC_URL}/addImage.jpg`}
          alt={selectedImage ? "Selected Photo" : "Add"}
          sx={{
            cursor: "pointer",
            borderRadius: "16px",
            maxWidth: { xs: "100%", sm: "300px", md: "400px" },
            maxHeight: { xs: "200px", sm: "300px", md: "400px" },
            objectFit: "cover",
            border: "2px solid #ccc",
          }}
        />
      </label>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
    </Box>
  );
};

export default PhotoInsertPlace;
