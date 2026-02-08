import * as THREE from "three";

const HeroLights = () => (
  <>
    {/* Strong ambient light to brighten the entire scene */}
    <ambientLight intensity={1.2} color="#ffffff" />
    
    {/* Hemisphere light for better overall illumination */}
    <hemisphereLight 
      skyColor="#4cc9f0" 
      groundColor="#1a1a2e" 
      intensity={0.8} 
    />
    
    {/* Main key light - brighter and better positioned */}
    <directionalLight
      position={[5, 8, 5]}
      intensity={2}
      color="#ffffff"
      castShadow
    />
    
    {/* Lamp's light - adjusted */}
    <spotLight
      position={[2, 6, 6]}
      angle={0.3}
      penumbra={0.3}
      intensity={80}
      color="#ffffff"
    />
    
    {/* Bluish overhead lamp */}
    <spotLight
      position={[4, 7, 4]}
      angle={0.4}
      penumbra={0.5}
      intensity={50}
      color="#4cc9f0"
    />
    
    {/* Purplish side fill - increased intensity */}
    <spotLight
      position={[-4, 6, 5]}
      angle={0.5}
      penumbra={1}
      intensity={80}
      color="#9d4edd"
    />
    
    {/* Area light for soft moody fill - increased */}
    <primitive
      object={new THREE.RectAreaLight("#a259ff", 12, 4, 3)}
      position={[1, 4, 4]}
      rotation={[-Math.PI / 4, Math.PI / 4, 0]}
    />
    
    {/* Atmospheric point lights - increased */}
    <pointLight position={[0, 2, 0]} intensity={20} color="#7209b7" />
    <pointLight position={[2, 3, -2]} intensity={20} color="#4cc9f0" />
    <pointLight position={[-2, 3, 2]} intensity={15} color="#9d4edd" />
  </>
);

export default HeroLights;