import React from "react";
import Counter from "./Components/Counter";
import "./styleApp.css";
import background from "./Assets/goldmine2.jpg";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover, 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <header className="App-header" style={{ textAlign: "center" }}>
        <h1>
          <span> Counter App</span>
        </h1>
      </header>
      <Counter />
    </div>
  );
}

export default App;
