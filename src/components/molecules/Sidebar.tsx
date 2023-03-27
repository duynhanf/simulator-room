import React from "react";
import { Position } from "../../models";
import { GROUND_SIZE } from "../../utils/constants";

interface Props {
  position: Position;
}

const Sidebar: React.FC<Props> = ({ position }) => {
  return (
    <div className="sidebar border-2 w-full md:w-1/4 rounded-t-lg md:rounded-t-none md:rounded-l-lg p-4">
      <h1>Room 1</h1>
      <p>top : {(GROUND_SIZE / 2 + position.z).toFixed(3)}px</p>
      <p>left : {(GROUND_SIZE / 2 - position.x).toFixed(3)}px</p>
    </div>
  );
};

export default Sidebar;
