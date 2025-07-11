import { Html } from '@react-three/drei';
import { motion } from '@react-three/motion';
import { FC } from 'react';

type IslandProps = {
  position: [number, number, number];
  label: string;
  onClick?: () => void;
};

const Island: FC<IslandProps> = ({ position, label, onClick }) => {
  return (
    <motion.mesh
      position={position}
      onClick={onClick}
      whileHover={{ scale: 1.1, rotateY: 0.2 }}
    >
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial color="#4ade80" />
      <Html distanceFactor={8} className="pointer-events-none">
        <div className="text-white text-sm bg-black/50 px-2 py-1 rounded-md">
          {label}
        </div>
      </Html>
    </motion.mesh>
  );
};

export default Island;
