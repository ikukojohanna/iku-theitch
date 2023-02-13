import React, { useRef } from "react";
import "./styles.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sparkles, PositionalAudio } from "@react-three/drei";

import { CircleGeometry, Mesh, MeshBasicMaterial } from "three";

import { Text } from "@react-three/drei";
import {
    EffectComposer,
    HueSaturation,
    ChromaticAberration,
    GodRays,
    DepthOfField,
    BrightnessContrast,
} from "@react-three/postprocessing";

import { BlendFunction, Resizer, KernelSize } from "postprocessing";

let mesh = new Mesh(
    new CircleGeometry(2, 48),
    new MeshBasicMaterial({
        color: 0xf64226,
        transparent: true,
        opacity: 0.2,
        position: [5, 5, 5],
    })
);

mesh.rotation.x = Math.PI * 0.5;
mesh.position.set(1.17, 10.7, -4.1);
mesh.scale.set(1.5, 1, 1);

function SceneParticles() {
    return (
        <>
            <object3D position={[0, 0, 0]}>
                <Sparkles
                    count={50}
                    scale={[5, 5, 5]}
                    color={"white"}
                    size={0.5}
                    speed={0.3}
                    noise={0.1}
                />
            </object3D>

            <object3D position={[0, 0, 0]}>
                <Sparkles
                    count={50}
                    scale={[20, 20, 20]}
                    color={"white"}
                    size={2}
                    speed={0.3}
                    noise={0.2}
                />
            </object3D>

            <object3D position={[0, 0, -4]}>
                <Sparkles
                    count={50}
                    scale={[50, 50, 50]}
                    color={"white"}
                    size={0.5}
                    speed={1}
                    noise={5}
                />
            </object3D>

            <object3D position={[0, 0, 4]}>
                <Sparkles
                    count={100}
                    scale={[500, 500, 500]}
                    color={"white"}
                    size={20}
                    speed={1}
                    noise={10}
                />
            </object3D>
        </>
    );
}
function TextIku() {
    return (
        <>
            <Text
                anchorX="center" // default
                anchorY="middle" // default
                rotation={[0, 0, 0]}
                position={[0.7, 1, 1]}
                fontSize={0.8}
                color="black"
            >
                Iku
            </Text>
            <Text
                color="black"
                anchorX="center" // default
                anchorY="middle" // default
                rotation={[0, 0, 0]}
                position={[0.8, 0.3, 1]}
                fontSize={0.9}
            >
                Itch
            </Text>
            <Text
                color="black"
                anchorX="center" // default
                anchorY="middle" // default
                rotation={[0, 0, 0]}
                position={[-0.1, 0.6, 1]}
                fontSize={0.2}
            >
                The
            </Text>
            <Text
                color="white"
                anchorX="center" // default
                anchorY="middle" // default
                rotation={[0, 0, 0]}
                position={[0, -1, 1]}
                fontSize={0.12}
            >
                25.03.2023
            </Text>
        </>
    );
}

function Circle() {
    const mesh = useRef();
    //useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

    return (
        <mesh ref={mesh} position={[0, 0, -0.01]}>
            <circleGeometry args={[1.9, 48]} />
            <PositionalAudio
                position={[0, 0, 5]}
                autoplay
                loop
                url="itchwebsite.wav"
                distance={1}
                volume={10}
            />
            <meshBasicMaterial
                attach="material"
                color={"white"}
                transparent={true}
                opacity={0}
            />
        </mesh>
    );
}

export default function EntryPoint() {
    return (
        <Canvas camera={{ fov: 50, position: [0, 0, 6] }}>
            <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={0} />
            <Circle />
            <TextIku />
            <SceneParticles />

            <EffectComposer stencilBuffer={true}>
                <DepthOfField
                    focusDistance={0.012}
                    focalLength={0.015}
                    bokehScale={7}
                />
                <HueSaturation hue={0} saturation={-0.15} />
                <BrightnessContrast brightness={0.0} contrast={0.035} />
                <ChromaticAberration
                    radialModulation={true}
                    offset={[0.00175, 0.00175]}
                />
                <GodRays
                    sun={mesh}
                    blendFunction={BlendFunction.Screen}
                    samples={150}
                    density={1}
                    decay={0.94}
                    weight={5}
                    exposure={0.2}
                    clampMax={0.7}
                    width={Resizer.AUTO_SIZE}
                    height={Resizer.AUTO_SIZE}
                    kernelSize={KernelSize.SMALL}
                    blur={true}
                    position={[20, 20, 20]}
                />
            </EffectComposer>
        </Canvas>
    );
}
