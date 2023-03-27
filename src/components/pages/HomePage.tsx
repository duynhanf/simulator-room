import React, { useState } from 'react';
import { Vector3 } from '@babylonjs/core';
import { UNIT_SIZE } from '../../utils/constants';
import Sidebar from '../molecules/Sidebar';
import RoomFrame from '../molecules/RoomFrame';

const HomePage = () => {
  const [position, setPosition] = useState({ x: 0, z: 0 });

  const onUpdatePositionHandle = (targetPosition: Vector3) => {
    const actualPosition = {
      x: targetPosition._x,
      z: targetPosition._z,
    };
    if (actualPosition.x < 0) {
      actualPosition.x -= UNIT_SIZE / 2;
    } else {
      actualPosition.x += UNIT_SIZE / 2;
    }

    if (actualPosition.z < 0) {
      actualPosition.z -= UNIT_SIZE / 2;
    } else {
      actualPosition.z += UNIT_SIZE / 2;
    }
    setPosition(actualPosition);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar position={position} />
      <div className="main border-2 w-full md:w-3/4 h-full border-t-0 md:border-t-2 md:border-l-0 rounded-b-lg md:rounded-b-none md:rounded-r-lg p-1">
        <RoomFrame onUpdatePosition={onUpdatePositionHandle} />
      </div>
    </div>
  );
};

export default HomePage;
