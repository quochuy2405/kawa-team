'use client'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const IntroducePage = () => {
  const { scrollY } = useViewportScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 200])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false
  })
  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50
    }
  }
  return (
    <div className="h-screen">
      <motion.div className=" perspective h-screen w-1/2 bg-red-500" style={{ y: y1, x: -50 }} />
      <motion.div
        className="perspective h-screen w-1/2 bg-red-500"
        style={{ y: y2, x: 50, background: 'salmon' }}
      />
      <div className="perspective h-screen"></div>
      <motion.div
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 2, ease: 'easeOut' }}
        ref={ref}
        className="perspective h-44 w-1/2 bg-white"
      />
      {/* <div ref={parallax.ref} className="bg-white">
        <h2 className="outline-text text-6xl font-extrabold uppercase !text-transparent">
          Your Limits
        </h2>
        <h1 className="text-6xl font-extrabold uppercase">Reach Beyound</h1>
      </div> */}
    </div>
  )
}

export default IntroducePage
