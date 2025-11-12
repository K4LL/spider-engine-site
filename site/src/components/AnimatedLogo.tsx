import { motion } from "framer-motion"

import Logo from "../assets/logo.svg?react"

export function AnimatedLogo() {
  return (
    <motion.div
      initial={{ order: 2, opacity: 0.1, y: 40 }}
      animate={{ order: 2, opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Logo className="logo"/>
    </motion.div>
  )
}