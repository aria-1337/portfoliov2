import {
    OrbitControls,
    Environment,
    Sparkles,
    Sky,
    Stars,
    Sphere
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

function Meshes(props) {
    return (
        <group {...props} dispose={null}>
            <Sparkles count={10000} scale={73} size={10} speed={0.5} opacity={0.2} color={'white'} />
            <Sparkles count={10000} scale={73} size={10} speed={0.5} opacity={0.2} color={'orange'} />
        </group>
    );
}

export default function Effect(props) {
    return (
        <Canvas camera={{ near: 0.1, position: [0, 0, 25], fov: '65'}}>
            <OrbitControls 
                makeDefault
                dollySpeed={1}
                maxDistance={100}
                minDistance={100}
                target={[2, -2, 0]}
            />
            <ambientLight intensity={0.5} />
            <Meshes />
        </Canvas>
    );
}
