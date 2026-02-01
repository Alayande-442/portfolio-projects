import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import {Room} from "./Room";
import HeroLight from "./HeroLight";
import Particles from "./Particles";

const Hero3DModel = () => {
    const isTablet = useMediaQuery({query: "(max-width: 1024px)"});
    const isMobile = useMediaQuery({query: "(max-width: 768px)"});
    return (
        <Canvas camera={{position: [0, 0, 5], fov: 45}}>
           
            <OrbitControls
            enablePan={false}
            enableZoom={!isTablet}
            maxDistance={20}
            minDistance={5}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
            />


            {/* <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="red" />
            </mesh> */}

            <HeroLight />
            <Particles count={1000} />
            <group scale={isMobile ? 0.7 : 1}
            position={[0, -3.5, 0]}
            rotation={[0, -Math.PI / 4, 0]}
            >

            <Room />
            </group>
        </Canvas>
    );
};

export default Hero3DModel;