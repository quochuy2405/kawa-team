// Photos from https://citizenofnowhe.re/lines-of-the-city
'use client'
import { MotionValue, motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
// import './styles.css'

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}

function ImageCustom({ id }: { id: number }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, 300)

  return (
    <section className="perspective flex h-screen snap-center items-center justify-center">
      <div className="h-1/2 w-1/2 border-2 border-white" ref={ref}>
        {/* <Image src={`/${id}.jpg`} alt="A London skyscraper" /> */}
      </div>
      <motion.h2 className="color-white" style={{ y }}>{`#00${id}`}</motion.h2>
    </section>
  )
}

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div>
      {[1, 2, 3, 4, 5].map((image) => (
        <ImageCustom key={image} id={image} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </div>
  )
}
