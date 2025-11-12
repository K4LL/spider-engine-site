import { motion, useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface AnimatedSectionProps {
  children?: ReactNode
  sectionClassName?: string
  once?: boolean
}

export function AnimatedSection({ children, sectionClassName, once = true }: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "-100px" })

  return (
    <motion.div className={ sectionClassName }
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
