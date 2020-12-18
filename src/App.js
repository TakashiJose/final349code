import logo from './logo.svg';
import './App.css';
import { getElementError } from '@testing-library/react';

//incomplete
function App() {
  return (
    <div>
      <button id="roll">roll</button>
      <div id="result"></div>
    </div>

  );
}

let dice=0;

let roll = () =>{
  dice=Math.floor(Math.random(1,6))
};

document.getElementById("roll").addEventListener("click", () => roll());

document.getElementById("result").innerHTML=dice;

export default App;
