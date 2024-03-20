import React from 'react';

const Button = ({ onClick, disabled }) => {
  return (
    <button className="load-more" onClick={onClick} disabled={disabled}>
      Load More
    </button>
  );
};

export default Button;