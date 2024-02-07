'use client'
import { useScroll, useSpring, motion } from 'framer-motion'
import React from 'react'

const ScrollUI = () => {
  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return <motion.div className="progress" style={{ scaleY }} />
}

export default ScrollUI
