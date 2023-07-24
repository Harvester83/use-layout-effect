import { useState, useLayoutEffect, useEffect } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);

  useLayoutEffect(() => {
    if (value === 0) {
      setValue(Math.random() * 99 + 99);
    }
  }, [value]);

  console.log("render", value);
  return <div onClick={() => setValue(0)}>value: {value}</div>;
}

export default App;
