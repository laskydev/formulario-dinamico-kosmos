import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function DeleteButton({ id }) {
  const { dispatch } = useContext(AppContext);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({ type: 'REMOVE_FIELD', payload: id });
  };

  return (
    <button type="button" className="bg-red-500 rounded-lg py-1 px-3 mt-1 mb-3" onClick={handleClick}>
      Delete
    </button>
  );
}

export default DeleteButton;
