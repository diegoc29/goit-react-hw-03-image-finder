import React from 'react';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';

const ImageFinder = ({ query, images, isLoading, currentPage, largeImageUrl, showModal, onSubmit, onLoadMore, onImageClick, onCloseModal }) => {
  return (
    <div className="image-finder">
      <Searchbar onSubmit={onSubmit} />
      {isLoading ? (
        <Loader />
      ) : (
        <ImageGallery images={images} onImageClick={onImageClick} />
      )}
      {images.length > 0 && <Button onClick={onLoadMore} />}
      {showModal && (
        <Modal imageUrl={largeImageUrl} onClose={onCloseModal} />
      )}
    </div>
  );
};

export default ImageFinder;