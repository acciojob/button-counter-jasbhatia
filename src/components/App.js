import React from "react";
import "./../styles/App.css";

const App = () => {
  const [count, setCount] = useState(0);

  function inc() {
    setCount(count + 1);
  }
  return (
    <div>
      <p>Button clicked {count} times.</p>
      <button onclick={inc}>Click me</button>
    </div>
  );
};

export default App;
