import React, { useState } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery'; 
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal'; 

const apiKey = '41188201-214d0d91838319eb1191e729e';

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [largeImageUrl, setLargeImageUrl] = useState('');
  const [showModal, setShowModal] = useState(false);

  const fetchImages = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://pixabay.com/api/?q=${query}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
      );
      const data = await response.json();
      setImages(prevImages => [...prevImages, ...data.hits]);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchSubmit = newQuery => {
    setQuery(newQuery);
    setImages([]);
    setCurrentPage(1);
    fetchImages();
  };

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
    fetchImages();
  };

  const handleImageClick = imageUrl => {
    setLargeImageUrl(imageUrl);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="app">
      <Searchbar onSubmit={handleSearchSubmit} />
      {isLoading ? (
        <Loader />
      ) : (
        <ImageGallery images={images} onImageClick={handleImageClick} />
      )}
      {images.length > 0 && <Button onClick={handleLoadMore} />}
      {showModal && (
        <Modal imageUrl={largeImageUrl} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;