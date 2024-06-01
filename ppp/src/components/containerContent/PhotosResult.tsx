import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

const PhotosResult: React.FC = () => {
  const [imagePath, setImagePath] = useState<string | null>(null);

  useEffect(() => {
    const storedImage = localStorage.getItem("selectedImage");
    if (storedImage) {
      setImagePath(storedImage);
    }
  }, []);

  return (
    <Box sx={{ textAlign: "center", marginTop: "50px" ,marginBottom: "50px",}}>
      {imagePath ? (
        <Box
          component="img"
          src={imagePath}
          alt="Uploaded Image"
          sx={{
            maxWidth: "100%",
            maxHeight: "400px",
            borderRadius: "16px",
            border: "2px solid #ccc",
          }}
        />
      ) : (
        <p>No image uploaded yet.</p>
      )}
    </Box>
  );
};

export default PhotosResult;
