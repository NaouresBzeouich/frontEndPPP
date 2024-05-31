import React, { useState } from 'react';

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
    <div className="photo-insert-place">
      {selectedImage ? (
        <img src={selectedImage} alt="Selected Photo" />
      ) : (
        <div className="placeholder">
          <label htmlFor="photo-input">
            Drag and drop your photo here or click to browse
          </label>
          <input
            type="file"
            id="photo-input"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
      )}
    </div>
  );
};

export default PhotoInsertPlace;
