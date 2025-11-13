import { Suspense } from 'react';
import './App.css'
import Bottles from './conponent/Bottles/Bottles';
import Form from './conponent/form/Form';


const bottlesPromise = fetch('./bottles.json').then(res => res.json());

function App() {


  

  return (
    <>
      {/* <Form></Form> */}
      <h1>Water Bottle</h1>
      <Suspense fallback={<h3>Bottles are loading.........</h3>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
      
    </>
  )
}

export default App
