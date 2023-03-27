import { TextureAssetTask } from '@babylonjs/core';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import '@babylonjs/core/Loading/loadingScreen';
import React from 'react';
import { Task, TaskType, useAssetManager } from 'react-babylonjs';
import { GROUND_SIZE } from '../../utils/constants';

const textureAssets: Task[] = [
  {
    taskType: TaskType.Texture,
    url: './topview.png',
    name: 'topview',
  },
];

interface ShapeProp {
  size: number;
  onUpdatePosition: (position: Vector3) => void;
}

const Shape: React.FC<ShapeProp> = ({ size, onUpdatePosition }) => {
  const assetManagerResult = useAssetManager(textureAssets, {
    useDefaultLoadingScreen: true,
  });

  const validateDrag = (targetPosition: Vector3) => {
    if (
      Math.abs(targetPosition.x) <= GROUND_SIZE / 2 - size / 2 &&
      Math.abs(targetPosition.z) <= GROUND_SIZE / 2 - size / 2
    ) {
      onUpdatePosition(targetPosition);
      return true;
    }
    return false;
  };

  return (
    <>
      <box name="blue2" size={size} position={new Vector3(0, size / 2, 0)}>
        <standardMaterial name="topview">
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
