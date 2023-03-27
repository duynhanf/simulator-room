import { Vector3 } from '@babylonjs/core';
import { GROUND_SIZE } from './constants';

export const validateDragArea = (targetPosition: Vector3, boxSize: number) => {
  return (
    Math.abs(targetPosition.x) <= GROUND_SIZE / 2 - boxSize / 2 &&
    Math.abs(targetPosition.z) <= GROUND_SIZE / 2 - boxSize / 2
  );
};
