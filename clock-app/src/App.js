import "./App.css";
import { useState } from "react";
import Clock from "./Clock.js";

function App() {
  const [time, setTime] = useState(new Date());

  setInterval(() => {
    setTime(new Date());
  }, 1000);

  return (
    <div className="App">
      <h1>Current Time</h1>
      <Clock time={time} />
    </div>
  );
}

export default App;
