import { useFrame } from '@react-three/fiber'
import { MeshProps } from '@react-three/fiber'
import { useRef } from 'react'
import Island from './Island'
import { OverlayType } from './Overlay'

interface SceneProps {
  onSelect: (type: OverlayType) => void
}

export default function Scene({ onSelect }: SceneProps) {
  const group = useRef<THREE.Group>(null!)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    group.current.rotation.y = t * 0.1
  })

  return (
    <group ref={group}>
      <Island position={[-4, 0, 0]} label="About" onClick={() => onSelect('about')} />
      <Island position={[0, 0, 0]} label="Projects" onClick={() => onSelect('projects')} />
      <Island position={[4, 0, 0]} label="Skills" onClick={() => onSelect('skills')} />
      <Island position={[0, -3, 0]} label="Contact" onClick={() => onSelect('contact')} />
    </group>
  )
}
