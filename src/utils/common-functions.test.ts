import { Vector3 } from '@babylonjs/core';
import { validateDragArea } from './common-functions';
import { expect, describe, it } from 'vitest';

describe('validate draggable area', () => {
  it('box inside draggable area', () => {
    expect(validateDragArea(new Vector3(0, 0, 0), 10, 1)).toBe(true);
  });

  it('box outside draggable area', () => {
    expect(validateDragArea(new Vector3(4.6, 0, 0), 10, 1)).toBe(false);
  });

  it('box is in border of draggable area(x-asis)', () => {
    expect(validateDragArea(new Vector3(4.5, 0, 0), 10, 1)).toBe(true);
  });

  it('box is in border of draggable area(z-asis)', () => {
    expect(validateDragArea(new Vector3(0, 0, -4.5), 10, 1)).toBe(true);
  });
});
