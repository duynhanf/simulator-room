import { Vector3 } from '@babylonjs/core';

/**
 * Check mouse position whether inside draggable area or not
 * @param targetPosition mouse's position
 * @param groundSize size of ground
 * @param boxSize size of box
 * @returns true - if box is inside area, false - if box is outside area
 */
export const validateDragArea = (
  targetPosition: Vector3,
  groundSize: number,
  boxSize: number
) => {
  return (
    Math.max(Math.abs(targetPosition.x), Math.abs(targetPosition.z)) <=
    groundSize / 2 - boxSize / 2
  );
};
