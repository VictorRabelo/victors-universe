import { motion } from 'framer-motion'

export type OverlayType = 'about' | 'projects' | 'skills' | 'contact'

interface OverlayProps {
  type: OverlayType
  onClose: () => void
}

export default function Overlay({ type, onClose }: OverlayProps) {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-white dark:bg-gray-800 rounded p-6 max-w-md w-full">
        <button className="float-right" onClick={onClose}>X</button>
        <h2 className="text-xl mb-4 capitalize">{type}</h2>
        <p>
          This is the {type} section. Replace this text with your own content.
        </p>
      </div>
    </motion.div>
  )
}
