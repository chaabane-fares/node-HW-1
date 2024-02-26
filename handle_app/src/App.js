import './App.css';
import {useState} from 'react'

function App() {

  const [result,setResult]=useState(0)

  function handleButtonClickInc(){
      setResult(setResult+1)
  }
  function handleButtonClickDec(){
    setResult(setResult-1)
  }
  function handleButtonClickReset(){
    setResult(0)
  } 
  console.log("set*********        "+setResult)
  return (
    <div className="App">
      <h1>{result}</h1>
      <button onClick={()=>handleButtonClickInc()}>+</button>
      <button onClick={()=>handleButtonClickDec()}>-</button>
      <button onClick={()=>handleButtonClickReset()}>Reset</button>
    </div>
  );
}

export default App;
