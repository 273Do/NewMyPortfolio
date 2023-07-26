// import * as THREE from "three";
// import { useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Environment, useGLTF } from "@react-three/drei";
// import { EffectComposer, N8AO, SSAO } from "@react-three/postprocessing";
// import {
//   BallCollider,
//   Physics,
//   RigidBody,
//   CylinderCollider,
// } from "@react-three/rapier";

// THREE.ColorManagement.legacyMode = false;
// // const baubleMaterial = new THREE.MeshLambertMaterial({
// //   color: "#c0a0a0",
// //   emissive: "red",
// // });

// const vertexShader = `
//   varying vec2 vUv;
//   void main() {
//     vUv = uv;
//     gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//   }
// `;

// const fragmentShader = `
//   varying vec2 vUv;
//   uniform vec3 color1;
//   uniform vec3 color2;

//   void main() {
//     gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
//   }
// `;

// // const baubleMaterial = (gradation) =>
// //   new THREE.ShaderMaterial({
// //     vertexShader,
// //     fragmentShader,
// //     uniforms: {
// //       color1: { value: new THREE.Color(gradation[0]) }, // Thor:ffa680
// //       color2: { value: new THREE.Color(gradation[1]) }, // Thor:c6578b
// //     },
// //     transparent: true,
// //     opacity: 0.5,
// //     side: THREE.DoubleSide,
// //   });

// const capMaterial = new THREE.MeshStandardMaterial({
//   metalness: 0.75,
//   roughness: 0.15,
//   color: "#c4a497",
//   emissive: "#600000",
//   envMapIntensity: 20,
// });
// const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);
// const baubles = [...Array(50)].map(() => ({
//   scale: [0.75, 0.75, 1, 1, 1.25][Math.floor(Math.random() * 5)],
// }));

// function Bauble({
//   vec = new THREE.Vector3(),
//   scale,
//   r = THREE.MathUtils.randFloatSpread,
//   gradation,
// }) {
//   // const { nodes } = useGLTF("/cap.glb");
//   const { nodes } = useGLTF("/cap.glb");
//   const api = useRef();
//   useFrame((state, delta) => {
//     delta = Math.min(0.1, delta);
//     api.current.applyImpulse(
//       vec
//         .copy(api.current.translation())
//         .normalize()
//         .multiply({
//           x: -50 * delta * scale,
//           y: -150 * delta * scale,
//           z: -50 * delta * scale,
//         })
//     );
//   });
//   return (
//     <RigidBody
//       linearDamping={0.75}
//       angularDamping={0.15}
//       friction={0.2}
//       position={[r(20), r(20) - 25, r(20) - 10]}
//       ref={api}
//       colliders={false}
//       dispose={null}
//       onClick={() => console.log("osareat")}
//     >
//       <BallCollider args={[scale]} />
//       <CylinderCollider
//         rotation={[Math.PI / 2, 0, 0]}
//         position={[0, 0, 1.2 * scale]}
//         args={[0.15 * scale, 0.275 * scale]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         scale={scale}
//         geometry={sphereGeometry}
//         material={
//           new THREE.ShaderMaterial({
//             vertexShader,
//             fragmentShader,
//             uniforms: {
//               color1: { value: new THREE.Color(gradation[0]) }, // Thor:ffa680
//               color2: { value: new THREE.Color(gradation[1]) }, // Thor:c6578b
//             },
//             transparent: true,
//             // opacity: 0.5,
//             side: THREE.DoubleSide,
//           })
//         }
//       />
//       <mesh
//         castShadow
//         scale={2.5 * scale}
//         position={[0, 0, -1.8 * scale]}
//         geometry={nodes.Mesh_1.geometry}
//         material={capMaterial}
//       />
//     </RigidBody>
//   );
// }

// function Pointer({ vec = new THREE.Vector3() }) {
//   const ref = useRef();
//   useFrame(({ mouse, viewport }) => {
//     vec.lerp(
//       {
//         x: (mouse.x * viewport.width) / 2,
//         y: (mouse.y * viewport.height) / 2,
//         z: 0,
//       },
//       0.2
//     );
//     ref.current?.setNextKinematicTranslation(vec);
//   });
//   return (
//     <RigidBody
//       position={[100, 100, 100]}
//       type="kinematicPosition"
//       colliders={false}
//       ref={ref}
//     >
//       <BallCollider args={[2]} />
//     </RigidBody>
//   );
// }

// export const Three = ({ gradation }) => (
//   <Canvas
//     shadows
//     gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
//     camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
//     onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
//   >
//     <ambientLight intensity={1} />
//     <spotLight
//       position={[20, 20, 25]}
//       penumbra={1}
//       angle={0.2}
//       color="white"
//       castShadow
//       shadow-mapSize={[512, 512]}
//     />
//     <directionalLight position={[0, 5, -4]} intensity={4} />
//     <directionalLight position={[0, -15, -0]} intensity={4} color="red" />
//     <Physics gravity={[0, 0, 0]}>
//       <Pointer />
//       {
//         baubles.map((props, i) => <Bauble gradation={gradation}  key={i} {...props} />) /* prettier-ignore */
//       }
//     </Physics>
//     <Environment files="/adamsbridge.hdr" />
//     <EffectComposer disableNormalPass multisampling={0}>
//       <N8AO color="white" aoRadius={2} intensity={1} />
//       <SSAO />
//     </EffectComposer>
//   </Canvas>
// );

import { RGBELoader } from "three-stdlib";
import { Canvas, useLoader } from "@react-three/fiber";
import {
  Center,
  Text3D,
  Instance,
  Instances,
  Environment,
  Lightformer,
  OrbitControls,
  RandomizedLight,
  AccumulativeShadows,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import { useControls, button } from "leva";
import { useEffect, useState } from "react";

export function Three({ mainText, mainColor, mainFunc }) {
  const [triggerRender, setTriggerRender] = useState(false);

  const { autoRotate, text, shadow, ...config } = useControls({
    text: mainText, //"Credit_\nChecker"
    backside: true,
    backsideThickness: { value: 0.3, min: 0, max: 2 },
    samples: { value: 16, min: 1, max: 32, step: 1 },
    resolution: { value: 512, min: 64, max: 2048, step: 64 }, //1024
    transmission: { value: 1, min: 0, max: 1 },
    clearcoat: { value: 0, min: 0.1, max: 1 },
    clearcoatRoughness: { value: 0.0, min: 0, max: 1 },
    thickness: { value: 0.3, min: 0, max: 5 },
    chromaticAberration: { value: 5, min: 0, max: 5 },
    anisotropy: { value: 0.3, min: 0, max: 1, step: 0.01 },
    roughness: { value: 0, min: 0, max: 1, step: 0.01 },
    distortion: { value: 0.5, min: 0, max: 4, step: 0.01 },
    distortionScale: { value: 0.1, min: 0.01, max: 1, step: 0.01 },
    temporalDistortion: { value: 0.08, min: 0, max: 1, step: 0.01 },
    ior: { value: 1.5, min: 0, max: 2, step: 0.01 },
    color: mainColor[0], //#ff9cf5
    gColor: mainColor[1], //#ff7eb3
    shadow: mainColor[2], //#750d57
    autoRotate: true,
  });

  // mainTextやmainColorが変更されたときに再レンダリングをトリガーする
  useEffect(() => {
    // stateを変更することで再レンダリングをトリガーします
    setTriggerRender((prev) => !prev);
  }, [mainText, mainColor]);

  // mainTextやmainColorが変更されたときにconfigの値を更新する
  useEffect(() => {
    config.text = mainText;
    config.color = mainColor[0];
    config.gColor = mainColor[1];
    config.shadow = mainColor[2];
  }, [mainText, mainColor, triggerRender]);

  return (
    <Canvas
      shadows
      orthographic
      camera={{ position: [10, 20, 20], zoom: 80 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <color attach="background" args={["#222"]} />
      {/** The text and the grid */}
      <Text
        fnc={mainFunc}
        config={config}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1, 5]}
      >
        {mainText}
      </Text>
      {/** Controls */}
      <OrbitControls
        autoRotate={autoRotate}
        autoRotateSpeed={-0.3}
        zoomSpeed={0.25}
        minZoom={40}
        maxZoom={140}
        enablePan={false}
        dampingFactor={0.05}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 3}
      />
      {/** The environment is just a bunch of shapes emitting light. This is needed for the clear-coat */}
      <Environment resolution={32}>
        <group rotation={[-Math.PI / 4, -0.3, 0]}>
          <Lightformer
            intensity={20}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={[10, 10, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={[10, 2, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={[10, 2, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={[20, 2, 1]}
          />
          <Lightformer
            type="ring"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-0.1, -1, -5]}
            scale={10}
          />
        </group>
      </Environment>
      {/** Soft shadows */}
      <AccumulativeShadows
        frames={100}
        color={mainColor[2]}
        colorBlend={5}
        toneMapped={true}
        alphaTest={0.9}
        opacity={1}
        scale={30}
        position={[0, -1.01, 0]}
      >
        <RandomizedLight
          amount={4}
          radius={10}
          ambient={0.5}
          intensity={1}
          position={[0, 10, -10]}
          size={15}
          mapSize={1024}
          bias={0.0001}
        />
      </AccumulativeShadows>
    </Canvas>
  );
}

const Grid = ({ number = 23, lineWidth = 0.026, height = 0.5 }) => (
  // Renders a grid and crosses as instances
  <Instances position={[0, -1.02, 0]}>
    <planeGeometry args={[lineWidth, height]} />
    <meshBasicMaterial color="#666" />
    {Array.from({ length: number }, (_, y) =>
      Array.from({ length: number }, (_, x) => (
        <group
          key={x + ":" + y}
          position={[
            x * 2 - Math.floor(number / 2) * 2,
            -0.01,
            y * 2 - Math.floor(number / 2) * 2,
          ]}
        >
          <Instance rotation={[-Math.PI / 2, 0, 0]} />
          <Instance rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        </group>
      ))
    )}
    {/* <gridHelper args={[100, 100, "#bbb", "#bbb"]} position={[0, -0.01, 0]} /> */}
  </Instances>
);

function Text({
  func,
  children,
  config,
  font = "/Inter_Medium_Regular.json",
  ...props
}) {
  const texture = useLoader(
    RGBELoader,
    "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr"
  );
  return (
    <>
      <group>
        <Center scale={[0.8, 1, 1]} front top {...props}>
          <Text3D
            castShadow
            bevelEnabled
            font={font}
            scale={5}
            letterSpacing={-0.03}
            lineHeight={0.6}
            height={0.25}
            bevelSize={0.01}
            bevelSegments={10}
            curveSegments={128}
            bevelThickness={0.01}
            onClick={() => func} //toolごとに呼び出す関数を変更
          >
            {children}
            <MeshTransmissionMaterial {...config} background={texture} />
          </Text3D>
        </Center>
        <Grid />
      </group>
    </>
  );
}
