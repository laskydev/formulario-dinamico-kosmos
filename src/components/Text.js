import React from 'react';
import DeleteButton from './DeleteButton';

function Text({ data }) {
  return (
    <div className="w-full p-3 flex flex-col text-center items-center">
      <label htmlFor={data._id}>{data.label}</label>
      <input id={data._id} type={data.type} placeholder={data.label} className="w-2/3 rounded-md p-2" />
      <DeleteButton id={data._uid} />
    </div>
  );
}

export default Text;
