import { useEffect, useState } from 'react'

type Star = {
  id: number
  top: string
  left: string
  size: string
  delay: string
}

export default function StarfieldBackground({ count = 40 }) {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const generatedStars = Array.from({ length: count }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 2}px`,
      delay: `${Math.random() * 3}s`,
    }))
    setStars(generatedStars)
  }, [count])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full opacity-30 animate-twinkle"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  )
}
