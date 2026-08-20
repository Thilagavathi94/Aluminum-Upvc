import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'

// Parses "500+" -> { number: 500, suffix: '+' }, "100%" -> { number: 100, suffix: '%' }
function parseValue(value) {
  const match = String(value).match(/^([\d,.]+)(.*)$/)
  if (!match) return { number: 0, suffix: String(value) }
  return { number: parseFloat(match[1].replace(/,/g, '')), suffix: match[2] }
}

export default function CountUp({ value, duration = 1.6 }) {
  const { number, suffix } = parseValue(value)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, number, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(v),
    })
    return () => controls.stop()
  }, [inView, number, duration])

  const rounded = Number.isInteger(number) ? Math.round(display) : display.toFixed(1)

  return (
    <motion.span ref={ref} initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
      {rounded}
      {suffix}
    </motion.span>
  )
}
