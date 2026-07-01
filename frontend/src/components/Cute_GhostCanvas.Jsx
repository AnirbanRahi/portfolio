import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cute_Ghost from "./Cute_Ghost";

export default function Cute_GhostCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
      <ambientLight intensity={2} />
      <directionalLight position={[5, 5, 5]} intensity={2} />

      <Cute_Ghost />

      <OrbitControls />
    </Canvas>
  );
}
