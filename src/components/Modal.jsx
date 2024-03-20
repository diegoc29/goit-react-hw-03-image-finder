import React from 'react';

const Modal = ({ imageUrl, onClose }) => {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal">
        <img src={imageUrl} alt="Full size" />
      </div>
    </div>
  );
};

export default Modal;