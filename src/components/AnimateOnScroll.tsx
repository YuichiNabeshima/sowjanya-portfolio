"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface AnimateOnScrollProps {
  children: ReactNode
  animation: string
  threshold?: number
  delay?: number
  className?: string
}

const AnimateOnScroll = ({ children, animation, threshold = 0.1, delay = 0, className = "" }: AnimateOnScrollProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible || isMobile ? animation : "opacity-0"}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionProperty: "all",
        transitionDuration: "1000ms",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        transform: isMobile ? "none" : undefined,
      }}
    >
      {children}
    </div>
  )
}

export default AnimateOnScroll

