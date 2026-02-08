import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import HeroLight from "./HeroLight";
import Particles from "./Particles";

const Hero3DModel = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  
  return (
    <Canvas 
      camera={{ 
        position: [0, 2, 8], // Moved camera back and up for better view
        fov: 50 // Slightly wider field of view
      }}
      style={{ background: 'transparent' }} // Ensure transparent background
    >
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={95} // Reduced max distance
        minDistance={80}  // Reduced min distance
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2.5}
        autoRotate={true} // Optional: gentle auto-rotation
        autoRotateSpeed={0.5}
      />

      <HeroLight />
      
      {/* Increased particle count and spread */}
      <Particles count={isMobile ? 500 : 1000} />
      
      <group 
        scale={isMobile ? 0.5 : isTablet ? 0.6 : 0.7} // Reduced scale
        position={[0, -2, 0]} // Adjusted position
        rotation={[0, -Math.PI / 6, 0]} // Slightly adjusted rotation
      >
        <Room />
      </group>
    </Canvas>
  );
};

export default Hero3DModel;