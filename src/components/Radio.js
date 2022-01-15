import React from 'react';
import DeleteButton from './DeleteButton';

function Radio({ data }) {
  return (
    <fieldset id={data._uid} className="flex flex-col items-center">
      <p>{data.label}</p>
      <div className="flex gap-5 mt-3">
        {data.options.map((item) => (
          <label key={item.value} htmlFor={item.value}>
            <input id={item.value} type="radio" value={item.value} name={data._uid} />
            {item.label}
          </label>
        ))}
      </div>
      <DeleteButton id={data._uid} />
    </fieldset>
  );
}

export default Radio;
