import { useEffect, useRef } from 'react'

/**
 * Custom hook that replicates ScrollReveal behavior using Intersection Observer.
 * Elements start hidden and animate in when they scroll into view.
 * 
 * @param {Object} options
 * @param {string} options.origin - Direction to reveal from: 'bottom' | 'top' | 'left' | 'right'
 * @param {number} options.delay - Delay in ms before the reveal animation starts
 * @param {number} options.threshold - Intersection threshold (0-1)
 */
export function useScrollReveal({ origin = 'bottom', delay = 0, threshold = 0.1 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Add initial hidden state classes
    element.classList.add('scroll-hidden', `scroll-from-${origin}`)
    if (delay) {
      element.style.transitionDelay = `${delay}ms`
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('scroll-show')
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [origin, delay, threshold])

  return ref
}

/**
 * Hook for revealing multiple child elements with staggered delays.
 * Observes a container and reveals all children with the specified class.
 * 
 * @param {Object} options
 * @param {string} options.origin - Direction to reveal from
 * @param {number} options.baseDelay - Base delay before first element reveals
 * @param {number} options.interval - Delay between each child element
 * @param {string} options.childSelector - CSS selector for child elements to animate
 */
export function useStaggerReveal({ origin = 'bottom', baseDelay = 400, interval = 200, childSelector = '.stagger-item' } = {}) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const children = container.querySelectorAll(childSelector)
    children.forEach((child, index) => {
      child.classList.add('scroll-hidden', `scroll-from-${origin}`)
      child.style.transitionDelay = `${baseDelay + index * interval}ms`
    })

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child) => {
            child.classList.add('scroll-show')
          })
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(container)

    return () => observer.disconnect()
  }, [origin, baseDelay, interval, childSelector])

  return containerRef
}
