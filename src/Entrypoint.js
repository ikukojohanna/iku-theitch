import React, { useRef } from "react";
import "./styles.css";
import { Canvas } from "@react-three/fiber";
import {
    OrbitControls,
    useGLTF,
    Sparkles,
    PositionalAudio,
} from "@react-three/drei";
import * as THREE from "three";

import { CircleGeometry, Mesh, MeshBasicMaterial } from "three";

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
        opacity: 1,
        position: [5, 5, 5],
        side: THREE.DoubleSide,
    })
);
mesh.rotation.x = Math.PI * 0.5;
mesh.position.set(1.17, 10.7, -4.1);
mesh.scale.set(1.5, 1, 1);

export function Model5(props) {
    const { nodes, materials } = useGLTF("/ikuwhiteflatmerged.glb");
    return (
        <group {...props} dispose={null}>
            <group
                position={[0, -0.7, 0.01]}
                rotation={[0, 0, 0]}
                scale={0.0017}
            >
                <mesh
                    geometry={nodes.Merged_Objects.geometry}
                    material={materials.Bilbao}
                />
            </group>
        </group>
    );
}
export function Model8(props) {
    const { nodes, materials } = useGLTF("/ikuwhiteflatmerged.glb");
    return (
        <group {...props} dispose={null}>
            <group
                position={[0, -0.7, -0.01]}
                rotation={[0, 0, 0]}
                scale={0.0017}
            >
                <mesh
                    geometry={nodes.Merged_Objects.geometry}
                    material={materials.Bilbao}
                />
            </group>
        </group>
    );
}
export function Model6(props) {
    const { nodes, materials } = useGLTF("/ikublack2.glb");
    return (
        <group
            position={[0, -0.7, 0]}
            rotation={[0, 0, 0]}
            scale={0.0017}
            {...props}
            dispose={null}
        >
            <mesh
                geometry={nodes.Merged_Objects.geometry}
                material={materials.Bilbao}
            />
        </group>
    );
}

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
export function Stora(props) {
    const { nodes, materials } = useGLTF("/stora.glb");
    return (
        <group {...props} dispose={null}>
            <group rotation={[-1.5, 0, 0]} scale={0.012} position={[0, 0, 1]}>
                <mesh
                    geometry={nodes["3D_Text_-_I"].geometry}
                    material={materials["Historic Shade"]}
                    position={[0, 0, 75]}
                />
                <mesh
                    geometry={nodes["3D_Text_-_K"].geometry}
                    material={materials["Historic Shade"]}
                    position={[20, 0, 75]}
                />
                <mesh
                    geometry={nodes["3D_Text_-_U"].geometry}
                    material={materials["Historic Shade"]}
                    position={[60, 0, 75]}
                />
                <mesh
                    geometry={nodes["3D_Text_-_T"].geometry}
                    material={materials["Historic Shade"]}
                    position={[-40, 0, 67]}
                    scale={0.33}
                />
                <mesh
                    geometry={nodes["3D_Text_-_H"].geometry}
                    material={materials["Historic Shade"]}
                    position={[-27, 0, 67]}
                    scale={0.3}
                />
                <mesh
                    geometry={nodes["3D_Text_-_E"].geometry}
                    material={materials["Historic Shade"]}
                    position={[-14, 0, 67]}
                    scale={0.3}
                />
                <mesh
                    geometry={nodes["3D_Text_-_I"].geometry}
                    material={materials["Historic Shade"]}
                    position={[0, 0, 37]}
                />
                <mesh
                    geometry={nodes["3D_Text_-_T_1"].geometry}
                    material={materials["Historic Shade"]}
                    position={[17, 0, 37]}
                />
                <mesh
                    geometry={nodes["3D_Text_-_C"].geometry}
                    material={materials["Historic Shade"]}
                    position={[50, 0, 37]}
                />
                <mesh
                    geometry={nodes["3D_Text_-_H_1"].geometry}
                    material={materials["Historic Shade"]}
                    position={[90, 0, 37]}
                />
            </group>
        </group>
    );
}

export function Date(props) {
    const { nodes, materials } = useGLTF("/date.glb");
    return (
        <group {...props} dispose={null} rotation={[-1.5, 0, -3.15]}>
            <group scale={0.012} position={[0, -0.1, -0.2]}>
                <mesh
                    geometry={nodes["3D_Text_-_1"].geometry}
                    material={materials["City Terrace"]}
                    position={[-147.38, 0, 0]}
                    scale={[1, 0.13, 1]}
                />
                <mesh
                    geometry={nodes["3D_Text_-_4"].geometry}
                    material={materials["City Terrace"]}
                    position={[-118.58, 0, 0]}
                    scale={[1, 0.13, 1]}
                />
                <mesh
                    geometry={nodes["3D_Text_-_4_1"].geometry}
                    material={materials["City Terrace"]}
                    position={[-36.05, 0, 0]}
                    scale={[1, 0.13, 1]}
                />
                <mesh
                    geometry={nodes["3D_Text_-_"].geometry}
                    material={materials["City Terrace"]}
                    position={[-85.95, 0, 0]}
                    scale={[1, 0.13, 1]}
                />
                <mesh
                    geometry={nodes["3D_Text_-__1"].geometry}
                    material={materials["City Terrace"]}
                    position={[-3.42, 0, 0]}
                    scale={[1, 0.13, 1]}
                />
                <mesh
                    geometry={nodes["3D_Text_-_0"].geometry}
                    material={materials["City Terrace"]}
                    position={[-71.1, 0, 0]}
                    scale={[1, 0.13, 1]}
                />
                <mesh
                    geometry={nodes["3D_Text_-_0_1"].geometry}
                    material={materials["City Terrace"]}
                    position={[43.96, 0, 0]}
                    scale={[1, 0.13, 1]}
                />
                <mesh
                    geometry={nodes["3D_Text_-_2"].geometry}
                    material={materials["City Terrace"]}
                    position={[11.43, 0, 0]}
                    scale={[1, 0.13, 1]}
                />
                <mesh
                    geometry={nodes["3D_Text_-_2_1"].geometry}
                    material={materials["City Terrace"]}
                    position={[79.02, 0, 0]}
                    scale={[1, 0.13, 1]}
                />
                <mesh
                    geometry={nodes["3D_Text_-_3"].geometry}
                    material={materials["City Terrace"]}
                    position={[111.55, 0, 0]}
                    scale={[1, 0.13, 1]}
                />
            </group>
        </group>
    );
}

function Circle() {
    const mesh = useRef();

    return (
        <mesh ref={mesh} position={[0, 0, -0.01]}>
            <circleGeometry args={[1.7, 48]} />
            <PositionalAudio
                position={[0, 0, 0]}
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
                opacity={0.1}
            />
        </mesh>
    );
}

export default function EntryPoint() {
    return (
        <Canvas camera={{ fov: 40, position: [0, 0, 7] }}>
            <OrbitControls
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
            />
            <Circle />
            <Stora />
            <Date />
            <Model5 />
            <Model6 />
            <Model8 />

            <SceneParticles />
            <ambientLight />
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
                    samples={120}
                    density={0.8}
                    decay={0.9}
                    weight={5}
                    exposure={0.08}
                    clampMax={0.8}
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
