import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Hero3DModel = () => {
    return (
        <Canvas camera={{position: [0, 0, 5], fov: 45}}>
            <ambientLight intensity={0.2} color="#1a1a40"/>
            <directionalLight position={[5, 5, 5]} intensity={1} />

            <OrbitControls/>


            <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="red" />
            </mesh>
        </Canvas>
    );
};

export default Hero3DModel;