import React, { useContext, useEffect, useState } from 'react';
import ButtonComponent from './components/ButtonComponent';
import Form from './components/Form';
import { AppContext } from './context/AppContext';
import dataRaw from './data.json';

const data = dataRaw.fields;

function App() {
  const { state, dispatch } = useContext(AppContext);
  const [arrIdsState, setarrIdsState] = useState([]);

  useEffect(() => {
    setarrIdsState(state.map((item) => item.payload._uid));
  }, [state]);

  const handleClick = (e, actualData) => {
    e.preventDefault();
    dispatch({ type: 'ADD_FIELD', payload: actualData });
  };

  return (
    <div className="container mx-auto bg-slate-800 rounded-md h-full p-5">
      <h1 className="text-center text-4xl">Formulario Dinámico</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 py-5">
        <div className="w-full bg-slate-700 rounded-md p-5">
          <h2 className="text-center text-2xl">Agregar campos</h2>
          <div>
            {data.map((item) => (arrIdsState.includes(item._uid) ? null : ((<ButtonComponent key={item.type} data={item} handleClick={handleClick} />))))}
          </div>
        </div>
        <div className="w-full bg-slate-700 rounded-md p-5">
          <h2 className="text-center text-2xl">Formulario</h2>
          <Form />
        </div>

      </div>
    </div>
  );
}

export default App;
