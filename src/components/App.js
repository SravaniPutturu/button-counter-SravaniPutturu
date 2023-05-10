
import React from "react";
import './../styles/App.css';

const App = () => {
  var count = 0;
  var counter = ()=>{
    count++;
  }
  return (
    <div>
        {
          <p>Button Clicked {count} 3 times</p>
          <button onclick = {counter}>Click Me</button>
        }
    </div>
  )
}

export default App
