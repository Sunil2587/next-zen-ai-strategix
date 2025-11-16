'use client';

import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';

function Model() {
  const gltf = useGLTF('/models/landing.glb');
  const modelRef = useRef<THREE.Group>(null);

  // Optional: Add subtle rotation animation
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
    }
  });

  return (
    <primitive 
      ref={modelRef}
      object={gltf.scene} 
      scale={2.2}
      position={[0, -2, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

export default function Scene3D() {
  return (
    <div className="w-full h-full rounded-3xl overflow-hidden">
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ 
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: true 
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={45} />
        
        {/* Lighting */}
        <ambientLight intensity={0.8} />
        <directionalLight 
          position={[5, 10, 7]} 
          intensity={1.5}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <pointLight position={[-3, 3, -3]} intensity={0.6} color="#4a8ae6" />
        <pointLight position={[3, 3, 3]} intensity={0.4} color="#ffffff" />
        <spotLight
          position={[0, 8, 5]}
          angle={0.4}
          penumbra={1}
          intensity={1}
          castShadow
        />

        {/* 3D Model */}
        <Suspense fallback={null}>
          <Model />
          <Environment preset="city" />
        </Suspense>

        {/* Camera Controls */}
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={4}
          maxDistance={10}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
}

// Preload the model
useGLTF.preload('/models/landing.glb');
