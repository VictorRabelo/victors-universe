import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Island from './Island';

export default function App() {
  const islands = [
    { label: 'About Me', position: [-2, 0, 0] },
    { label: 'Projects', position: [0, 0, 0] },
    { label: 'Skills', position: [2, 0, 0] },
    { label: 'Contact', position: [4, 0, 0] },
  ];

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 2, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {islands.map((island) => (
          <Island key={island.label} position={island.position} label={island.label} />
        ))}
        <OrbitControls />
      </Canvas>
    </div>
  );
}
