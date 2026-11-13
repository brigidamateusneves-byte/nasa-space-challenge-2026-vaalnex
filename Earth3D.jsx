
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  useTexture
} from "@react-three/drei";

function Planet() {
  const earth = useRef();

  const texture = useTexture(
    "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg"
  );

  useFrame(() => {
    earth.current.rotation.y += 0.0015;
  });

  return (
    <group ref={earth}>
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          map={texture}
          roughness={0.8}
        />
      </mesh>

      {/* Atmosfera */}
      <mesh scale={1.04}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.09}
          side={2}
        />
      </mesh>
    </group>
  );
}

export default function Earth3D() {
  return (
    <>
      <ambientLight intensity={0.8} />

      <directionalLight
        position={[5, 3, 5]}
        intensity={3}
      />

      <Stars
        radius={80}
        depth={50}
        count={2500}
        factor={4}
        fade
      />

      <Planet />

      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minDistance={4}
        maxDistance={9}
      />
    </>
  );
}
