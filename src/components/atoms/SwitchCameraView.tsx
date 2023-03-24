import React, { useState } from "react";

import SwitchCameraIcon from "@mui/icons-material/SwitchCamera";
import { Tooltip } from "@mui/material";
import { Vector3 } from "@babylonjs/core";

interface Props {
  onToggleCamera: (cameraTYpe: Vector3) => void;
}

enum CameraType {
  TOP,
  FRONT,
}

const SwitchCameraView: React.FC<Props> = ({ onToggleCamera }) => {
  const [cameraType, setCameraType] = useState<CameraType>(CameraType.TOP);

  return (
    <div
      className="absolute bottom-3 right-3 cursor-pointer"
      onClick={() => {
        if (cameraType === CameraType.TOP) {
          onToggleCamera(new Vector3(0, 15, 0));
          setCameraType(CameraType.FRONT);
        } else {
          onToggleCamera(new Vector3(0, 5, 5));
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

export default SwitchCameraView;
