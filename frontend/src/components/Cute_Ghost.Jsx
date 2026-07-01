import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Cute_Ghost() {
  const { nodes, scene } = useGLTF("/models/cute_ghost.glb");

  useEffect(() => {
    ["Sketchfab_model", "RootNode", "Ghost"].forEach((name) => {
      const obj = nodes[name];
      if (!obj) return;

      console.log("-----", name, "-----");
      console.log("position", obj.position.toArray());
      console.log("rotation", obj.rotation.toArray());
      console.log("scale", obj.scale.toArray());
    });
  }, [nodes]);

  return <primitive object={scene} />;
}
