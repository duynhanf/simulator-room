import { ActionEvent, Color3, TextureAssetTask } from "@babylonjs/core";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import "@babylonjs/core/Loading/loadingScreen";
import React from "react";
import { Task, TaskType, useAssetManager, useClick } from "react-babylonjs";
import { GROUND_SIZE } from "../../utils/constants";

const textureAssets: Task[] = [
  {
    taskType: TaskType.Texture,
    url: "./topview.png",
    name: "topview",
  },
];

interface ShapeProp {
  onClickObject?: (e: ActionEvent) => void;
  onUpdatePosition: (position: Vector3) => void;
}

const Shape: React.FC<ShapeProp> = ({ onClickObject, onUpdatePosition }) => {
  const assetManagerResult = useAssetManager(textureAssets, {
    useDefaultLoadingScreen: true,
  });

  const [ref] = useClick((e) => {
    onClickObject && onClickObject(e);
  });

  const validateDrag = (targetPosition: Vector3) => {
    onUpdatePosition(targetPosition);
    return (
      Math.max(Math.abs(targetPosition.x), Math.abs(targetPosition.z)) <=
      GROUND_SIZE / 2 - 0.5
    );
  };

  return (
    <>
      <box name="blue2" size={1} position={new Vector3(0, 0.5, 0)}>
        <standardMaterial name="topview">
          <texture
            fromInstance={
              (assetManagerResult.taskNameMap["topview"] as TextureAssetTask)
                .texture
            }
            assignTo="diffuseTexture"
            hasAlpha={false}
            url={""}
          />
        </standardMaterial>
        <pointerDragBehavior
          dragPlaneNormal={new Vector3(0, 0.5, 0)}
          validateDrag={validateDrag}
        />
      </box>
    </>
  );
};

export default Shape;
