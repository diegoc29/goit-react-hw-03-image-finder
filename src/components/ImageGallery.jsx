import React from 'react';
import ImageGalleryItem from './ImageGallery';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className="gallery">
      {images && images.map((image, index) => (
        <ImageGalleryItem
          key={index}
          imageUrl={image.webformatURL}
          onClick={() => onImageClick(image.largeImageURL)}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;