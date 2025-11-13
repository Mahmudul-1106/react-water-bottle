import { useState } from 'react';

export default function Form() {
  const [name, setName] = useState('Rofiq');
  const [age, setAge] = useState(42);
    console.log(name);
  return (
    <>
      {/* <input
        value={name}
        onChange={e => setName(e.target.value)}
      /> */}
      <button onClick={() => setName('Mamun')}>
        Set Name
      </button>
      <p>Hello, Mamun. </p>
      
    </>
  );
  
}

