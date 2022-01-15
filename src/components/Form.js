import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Radio from './Radio';
import Select from './Select';
import Text from './Text';

function Form() {
  const { state } = useContext(AppContext);

  return (
    <form>
      {state.map((item) => {
        if (item.payload.component === 'text') {
          return <Text key={item.payload._uid} data={item.payload} />;
        }
        if (item.payload.type === 'radio') {
          return <Radio key={item.payload._uid} data={item.payload} />;
        }
        if (item.payload.type === 'select') {
          return <Select key={item.payload._uid} data={item.payload} />;
        }
        return null;
      })}
    </form>
  );
}

export default Form;
