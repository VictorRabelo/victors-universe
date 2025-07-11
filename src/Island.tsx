import { useRef } from 'react';
import { MeshProps } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { useSpring, a } from '@react-spring/three';

interface IslandProps extends MeshProps {
  label: string;
}

export default function Island({ label, ...props }: IslandProps) {
  const ref = useRef<THREE.Mesh>(null!);
  const { scale } = useSpring({
    from: { scale: 1 },
    to: { scale: 1.05 },
    loop: { reverse: true },
    config: { mass: 1, tension: 100, friction: 20 },
  });

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.y += Math.sin(clock.getElapsedTime() + props.position![0]) * 0.001;
    }
  });

  return (
    <a.mesh ref={ref} {...props} scale={scale} onClick={() => console.log(label)}>
      <boxGeometry args={[1, 0.5, 1]} />
      <meshStandardMaterial color="#8ED6FF" />
      <Html distanceFactor={10} position={[0, 0.5, 0]}>
        <div className="px-2 py-1 bg-black bg-opacity-50 rounded text-sm">{label}</div>
      </Html>
    </a.mesh>
  );
}
