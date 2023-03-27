import React, { useState } from 'react';

import SwitchCameraIcon from '@mui/icons-material/SwitchCamera';
import { Tooltip } from '@mui/material';
import { Vector3 } from '@babylonjs/core';

interface Props {
  groundSize: number;
  onToggleCamera: (cameraTYpe: Vector3) => void;
}

enum CameraType {
  TOP,
  FRONT,
}

const SwitchCamera: React.FC<Props> = ({ onToggleCamera, groundSize }) => {
  const [cameraType, setCameraType] = useState<CameraType>(CameraType.TOP);

  return (
    <div
      className="absolute bottom-3 right-3 cursor-pointer"
      onClick={() => {
        if (cameraType === CameraType.TOP) {
          onToggleCamera(new Vector3(0, groundSize * 1.618, 0));
          setCameraType(CameraType.FRONT);
        } else {
          onToggleCamera(new Vector3(0, groundSize * 1.618, groundSize / 3));
          setCameraType(CameraType.TOP);
        }
      }}
    >
      <Tooltip title="Change camera position">
        <SwitchCameraIcon htmlColor="white" fontSize="large" />
      </Tooltip>
    </div>
  );
};

export default SwitchCamera;
