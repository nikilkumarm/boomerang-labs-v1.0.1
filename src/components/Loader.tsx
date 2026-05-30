'use client'

import { useEffect, useState } from 'react'

export default function Loader() {
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setDone(true), 300)
          return 100
        }
        return prev + Math.floor(Math.random() * 8) + 3
      })
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`loader ${done ? 'is-done' : ''}`} aria-hidden={done}>
      <div className="loader-logo">Boomerang Labs</div>
      <div className="loader-bar-wrap">
        <div className="loader-bar" />
      </div>
      <div className="loader-count">{Math.min(count, 100)}%</div>
    </div>
  )
}
