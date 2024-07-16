import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

export interface SpinnerProps {
  color: string;
  loading: boolean;
  cssOverride?: React.CSSProperties; // Optional if you want to provide custom CSS
}

const Spinner: React.FC<SpinnerProps> = ({ color, loading, cssOverride }) => {
  return (
    <ClipLoader color={color} loading={loading} cssOverride={cssOverride} size={150} aria-label="Loading Spinner" data-testid="loader" />
  );
};

export default Spinner;
