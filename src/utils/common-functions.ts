import { Vector3 } from '@babylonjs/core';

export const validateDragArea = (
  targetPosition: Vector3,
  groundSize: number,
  boxSize: number
) => {
  return (
    Math.abs(targetPosition.x) <= groundSize / 2 - boxSize / 2 &&
    Math.abs(targetPosition.z) <= groundSize / 2 - boxSize / 2
  );
};
