import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'
import { OrbitControls, Stars } from '@react-three/drei'
import { AnimatePresence } from 'framer-motion'
import Scene from './components/Scene'
import Overlay, { OverlayType } from './components/Overlay'

export default function App() {
  const [overlay, setOverlay] = useState<OverlayType | null>(null)

  return (
    <div className="h-full w-full relative">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Scene onSelect={setOverlay} />
        </Suspense>
        <Stars radius={100} count={5000} fade speed={2} />
        <OrbitControls enablePan={false} />
      </Canvas>
      <AnimatePresence>{overlay && <Overlay type={overlay} onClose={() => setOverlay(null)} />}</AnimatePresence>
    </div>
  )
}
