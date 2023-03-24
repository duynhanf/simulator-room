import { useState } from "react";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <>
      <div className="flex flex-col md:flex-row mt-16">
        <div className="sidebar border-2 w-full md:w-1/4 ">
          <h1>Room 1</h1>
          <p>Top : {position.x}px</p>
          <p>Left : {position.y}px</p>
        </div>
        <div className="main border-2 w-full md:w-3/4 h-full border-l-0">
          <h1>Main frame</h1>
        </div>
      </div>
    </>
  );
}

export default App;
