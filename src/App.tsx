import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Island from './components/Island';

export default function App() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <Island position={[-3, 0, 0]} label="About Me" />
        <Island position={[0, 0, -3]} label="Projects" />
        <Island position={[3, 0, 0]} label="Skills" />
        <Island position={[0, 0, 3]} label="Contact" />
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
}
