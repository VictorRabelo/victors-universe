import { MeshProps } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { motion } from 'framer-motion-3d'

interface IslandProps extends MeshProps {
  label: string
  onClick: () => void
}

export default function Island({ label, onClick, ...props }: IslandProps) {
  return (
    <motion.mesh {...props} onClick={onClick} whileHover={{ scale: 1.2 }}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#8B5CF6" />
      <Html distanceFactor={10} position={[0, 1.5, 0]} className="select-none">
        <div className="px-2 py-1 bg-white/80 dark:bg-gray-800/80 rounded text-sm">
          {label}
        </div>
      </Html>
    </motion.mesh>
  )
}
