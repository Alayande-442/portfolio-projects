import * as THREE from "three";
const HeroLight = () => {
    return (
        <>
           <spotLight
           position={[2, 5, 6]}
           intensity={100}
           angle={0.15}
           penumbra={0.2}
           color="white"
           /> 

            <spotLight
           position={[4, 5, 4]}
           intensity={40}
           angle={0.3}
           penumbra={0.5}
           color="#0b023cff"
           /> 

           <spotLight
           position={[-3, 5, 5]}
           intensity={60}
           angle={0.4}
           penumbra={1} 
           color="#020124ff"
           /> 

           <primitive
           object={new THREE.RectAreaLight("#ffffff", 8,3,2)}
           position={[1, 3, 4 ]}
           intensity={15}
           rotation={[Math.PI / 4, Math.PI / 4, 0]}
           />

           <pointLight
           position={[0, 1, 0]}
           intensity={10}
           color="#ffffff"
           />

           <pointLight
           position={[1, 2, -2]}
           intensity={10}
           color="#0b023cff"
           />
        </>
    );
};

export default HeroLight;
