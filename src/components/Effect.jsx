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
            <Sparkles count={5000} scale={75} size={10} speed={1} opacity={0.3} color={'white'} />
        </group>
    );
}

export default function Effect(props) {
    return (
        <Canvas camera={{ near: 0.1, position: [0, 0, 25], fov: '65'}}>
            <OrbitControls 
                makeDefault
                dollySpeed={0.1}
                maxDistance={45}
                minDistance={45}
                target={[2, -2, 0]}
            />
            <ambientLight intensity={0.5} />
            <Meshes />
        </Canvas>
    );
}
