import React from 'react';

function ButtonComponent({ data, handleClick }) {
  return (
    <button type="button" className="w-full p-5 cursor-pointer border rounded-2xl my-3 bg-slate-600" onClick={(e) => handleClick(e, data)}>
      <h3 className="font-semibold">
        Agregar field de tipo
        <span className="font-bold uppercase">{` ${data.type}`}</span>
      </h3>
      <p>{data.label}</p>
    </button>
  );
}

export default ButtonComponent;
