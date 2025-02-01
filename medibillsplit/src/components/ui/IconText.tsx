import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface IconTextProps {
  icon: LucideIcon
  text: string
  className?: string
}

export const IconText = ({ icon: Icon, text, className = "" }: IconTextProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex items-center space-x-2 ${className}`}
    >
      <div className="w-8 h-8 rounded-lg bg-medibill-card/50 flex items-center justify-center">
        <Icon className="w-4 h-4 text-medibill-blue" />
      </div>
      <span className="text-sm text-medibill-muted">{text}</span>
    </motion.div>
  )
}

