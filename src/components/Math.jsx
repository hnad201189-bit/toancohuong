import { useEffect, useRef } from 'react'
import katex from 'katex'
import 'katex/dist/katex.min.css'

export default function Math({ tex, block = false, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    try {
      katex.render(tex, ref.current, {
        throwOnError: false,
        displayMode: block,
      })
    } catch {
      ref.current.textContent = tex
    }
  }, [tex, block])

  return <span ref={ref} className={`math ${block ? 'math--block' : ''} ${className}`} />
}
