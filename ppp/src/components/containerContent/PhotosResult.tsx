import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

const PhotosResult: React.FC = () => {
  const [imagePath, setImagePath] = useState<string | null>(null);
  const [recommendedImages, setRecommendedImages] = useState<string[]>([]);

  useEffect(() => {
    const storedImage = localStorage.getItem("selectedImage");
    if (storedImage) {
      setImagePath(storedImage);
    }

    // Fetch recommended images from the JSON endpoint
    fetch('/RecommendedImages/recommendations.json')
      .then(response => response.json())
      .then(data => {
        if (data.recommendations) {
          setRecommendedImages(data.recommendations);
        }
      })
      .catch(error => console.error("Error fetching recommended images:", error));
  }, []);

  return (
    <Box sx={{ textAlign: "center", marginTop: "50px", marginBottom: "50px" }}>
      {imagePath ? (
        <>
          <Box
            component="img"
            src={imagePath}
            alt="Uploaded Image"
            sx={{
              maxWidth: "100%",
              maxHeight: "400px",
              borderRadius: "16px",
              border: "2px solid #ccc",
              marginBottom: "20px", 
            }}
          />
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
            {recommendedImages.map((img, index) => (
              <Box
                key={index}
                component="img"
                src={img}
                alt={`Recommended ${index}`}
                sx={{
                  maxWidth: "200px",
                  maxHeight: "200px",
                  borderRadius: "16px",
                  border: "2px solid #ccc",
                }}
              />
            ))}
          </Box>
        </>
      ) : (
        <p>No image uploaded yet.</p>
      )}
    </Box>
  );
};

export default PhotosResult;
