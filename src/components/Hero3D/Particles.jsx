import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber"; // Fixed: Changed from drei to fiber

const Particles = ({ count = 1000 }) => {
  const mesh = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 40; // Wide horizontal spread
      const z = (Math.random() - 0.5) * 40; // Wide depth spread
      
      temp.push({
        position: [
          x,
          Math.random() * 20 + 5, // Start high above the scene
          z,
        ],
        speed: 0.05 + Math.random() * 0.08, // Faster falling speed for rain
        initialX: x, // Store initial position for slight wind effect
        wobble: Math.random() * 0.02, // Slight horizontal movement
      });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    
    const positions = mesh.current.geometry.attributes.position.array;
    const time = state.clock.getElapsedTime();
    
    for (let i = 0; i < count; i++) {
      // Get current position
      let x = positions[i * 3];
      let y = positions[i * 3 + 1];
      let z = positions[i * 3 + 2];
      
      // Move particle down (rain falling)
      y -= particles[i].speed;
      
      // Add subtle wind/wobble effect
      x = particles[i].initialX + Math.sin(time + i) * particles[i].wobble;
      
      // Reset particle to top when it falls below the scene
      if (y < -5) {
        y = Math.random() * 10 + 15; // Reset to top
        x = (Math.random() - 0.5) * 30; // New random x position
        z = (Math.random() - 0.5) * 30; // New random z position
        particles[i].initialX = x; // Update initial position
      }
      
      // Update positions
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  const positions = new Float32Array(count * 3);
  particles.forEach((p, i) => {
    positions[i * 3] = p.position[0];
    positions[i * 3 + 1] = p.position[1];
    positions[i * 3 + 2] = p.position[2];
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#4cc9f0" // Slight blue tint for rain
        size={0.12} // Slightly elongated for rain drops
        transparent
        opacity={0.6}
        depthWrite={false}
        sizeAttenuation={true}
        blending={2} // Additive blending for glow effect
      />
    </points>
  );
};

export default Particles;