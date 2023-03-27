import { Container } from "@mui/material";
import { useState } from "react";
import RoomFrame from "./components/molecules/RoomFrame";
import Header from "./components/organisms/Header";
import { GROUND_SIZE } from "./utils/constants";

function App() {
  const [position, setPosition] = useState({ x: 0, z: 0 });

  return (
    <>
      <Header />
      <div className="mt-20">
        <Container maxWidth="lg">
          <div className="flex flex-col md:flex-row">
            <div className="sidebar border-2 w-full md:w-1/4 rounded-t-lg md:rounded-l-lg p-4">
              <h1>Room 1</h1>
              <p>top : {GROUND_SIZE / 2 + position.z}px</p>
              <p>left : {GROUND_SIZE / 2 - position.x}px</p>
            </div>
            <div className="main border-2 w-full md:w-3/4 h-full border-t-0  md:border-l-0 rounded-b-lg md:rounded-r-lg p-1">
              <RoomFrame
                onUpdatePosition={(targetPosition) => {
                  setPosition({
                    x: Math.floor(targetPosition._x),
                    z: Math.floor(targetPosition._z),
                  });
                }}
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
