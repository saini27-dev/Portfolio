// components/BlurBlob.jsx
import React from 'react';
import PropTypes from 'prop-types';

const BlurBlob = ({ position, size }) => {
  // Destructure position and size with default values
  const { top, left } = position
  const { width, height } = size

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: 'translate(-50%, -50%)',
        zIndex: 0,
      }}
    >
      <div
        className="w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl animate-blob"
      ></div>
    </div>
  );
};

// Define prop types
BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

export default BlurBlob;