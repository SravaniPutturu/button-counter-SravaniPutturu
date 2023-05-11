

// import React from "react";
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  var [count,plusCount] = useState(0);
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {count} times</p>
        <button onClick=(()=>plusCount(count + 1))>Click me</button>
    </div>
  )
}
