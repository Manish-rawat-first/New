import { useState } from 'react';
import './App.css'

function App() {
  let [counter,setState] = useState(15);
function addValue(){
  if(counter==20) counter = 19;
  counter = counter+1;
  setState(counter)
}
function DecValue(){
if(counter==0) counter = 1;
  counter = counter-1;
  setState(counter)
}
  return (
    <>
    <h1>Counter App : {counter}</h1>
    <h2>Increase V/S Decrease App</h2>
    <button onClick={addValue}>Add Value {counter}</button>
    <br/>
    <button onClick={DecValue}>Decrease Value {counter}</button>
    </>
  )
}

export default App
