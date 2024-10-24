// Container.jsx
// import React from 'react';

// Container component
const Container = ({ children, className = '', ...props } : any) => {
  return (
    <div
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
