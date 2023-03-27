import React from 'react';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import '@babylonjs/core/Loading/loadingScreen';
import { useAssetManager } from 'react-babylonjs';

import { validateDragArea } from '../../utils/common-functions';
import { TextureAssets } from '../../utils/constants';
import { TextureAssetTask } from '@babylonjs/core';

interface ShapeProp {
  name: string;
  size: number;
  onUpdatePosition: (position: Vector3) => void;
}

const Shape: React.FC<ShapeProp> = ({ name, size, onUpdatePosition }) => {
  const assetManagerResult = useAssetManager(TextureAssets, {
    useDefaultLoadingScreen: true,
  });

  const validateDrag = (targetPosition: Vector3) => {
    const isValid = validateDragArea(targetPosition, size);
    if (isValid) {
      onUpdatePosition(targetPosition);
    }
    return isValid;
  };

  return (
    <>
      <box
        name={`box-${name}`}
        size={size}
        position={new Vector3(0, size / 2, 0)}
      >
        <standardMaterial name={name}>
          <texture
            fromInstance={
              (assetManagerResult.taskNameMap['topview'] as TextureAssetTask)
                .texture
            }
            assignTo="diffuseTexture"
            hasAlpha={false}
            url={''}
          />
        </standardMaterial>
        <pointerDragBehavior
          dragPlaneNormal={new Vector3(0, size / 2, 0)}
          validateDrag={validateDrag}
        />
      </box>
    </>
  );
};

export default Shape;
