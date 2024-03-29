import React from 'react';
import './Pagination.css';

function Pagination({ nav = null, disable, onNextPageClick, onPrevPageClick }) {
  
  const handleNextPageClick = () => {
    onNextPageClick();
  };
  const handlePrevPageClick = () => {
    onPrevPageClick();
  };

  return (
    <div className="paginator">
      <button
        className="paginator__arrow"
        type="button"
        onClick={handlePrevPageClick}
        disabled={disable.left}
      >
        {'<'}
      </button>
      {nav && (
        <span className="paginator__nav" >
          {nav.current} / {nav.total}
        </span>
      )}
      <button
        className="paginator__arrow"
        type="button"
        onClick={handleNextPageClick}
        disabled={disable.right}
      >
        {'>'}
      </button>
    </div>
  );
};

export default React.memo(Pagination);