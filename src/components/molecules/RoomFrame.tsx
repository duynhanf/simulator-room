import React, { Suspense, useState } from 'react';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import '@babylonjs/core/Loading/loadingScreen';
import { Engine, Scene } from 'react-babylonjs';

import SwitchCamera from '../atoms/SwitchCamera';
import Shape from '../atoms/Shape';
import { GROUND_SIZE, UNIT_SIZE } from '../../utils/constants';

interface RoomFrameProps {
  onUpdatePosition: (position: Vector3) => void;
}

const RoomFrame: React.FC<RoomFrameProps> = ({ onUpdatePosition }) => {
  const [cameraPosition, setCameraPosition] = useState<Vector3>(
    new Vector3(0, GROUND_SIZE * 1.618, 0)
  );

  return (
    <>
      <div className="flex flex-1 relative">
        <Engine
          antialias
          adaptToDeviceRatio
          canvasId="simulatorRoom"
          engineOptions={{ preserveDrawingBuffer: true, stencil: true }}
        >
          <Scene>
            <arcRotateCamera
              name="camera"
              alpha={(3 * Math.PI) / 2}
              beta={Math.PI / 2}
              radius={10}
              target={Vector3.Zero()}
              setPosition={[cameraPosition]}
            />

            <hemisphericLight
              name="ligh1"
              direction={Vector3.Up()}
              intensity={0.5}
            />
            <Suspense fallback={null}>
              <Shape
                name="topview"
                size={UNIT_SIZE}
                onUpdatePosition={onUpdatePosition}
              />
            </Suspense>

            <ground
              name="ground1"
              width={GROUND_SIZE}
              height={GROUND_SIZE}
              subdivisions={100}
            />
          </Scene>
        </Engine>
        <SwitchCamera
          groundSize={GROUND_SIZE}
          onToggleCamera={(position) => {
            setCameraPosition(position);
          }}
        />
      </div>
    </>
  );
};

export default RoomFrame;
