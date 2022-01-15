import React from 'react';
import DeleteButton from './DeleteButton';

function Select({ data }) {
  return (
    <div className="w-full p-3 flex flex-col text-center items-center">
      <label htmlFor={data._uid}>{data.label}</label>
      <select name={data.uid} id={data.uid} className="w-2/3 rounded-md p-2 text-black">
        {data.options.map((item) => (
          <option className="text-black" key={item.value} value={item.value}>{item.label}</option>
        ))}
      </select>
      <DeleteButton id={data._uid} />
    </div>
  );
}

export default Select;
