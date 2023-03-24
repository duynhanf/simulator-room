import { useState } from "react";
import RoomFrame from "./components/molecules/RoomFrame";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });

  return (
    <>
      <div className="flex flex-col md:flex-row mt-16">
        <div className="sidebar border-2 w-full md:w-1/4 ">
          <h1>Room 1</h1>
          <p>_x : {position.x}px</p>
          <p>_y : {position.y}px</p>
          <p>_z : {position.z}px</p>
        </div>
        <div className="main border-2 w-full md:w-3/4 h-full border-l-0">
          <RoomFrame
            onUpdatePosition={(targetPosition) => {
              setPosition({
                x: Math.ceil(targetPosition._x),
                y: Math.ceil(targetPosition._y),
                z: Math.ceil(targetPosition._z),
              });
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
