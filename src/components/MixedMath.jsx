import Math from './Math'

// Splits text on $$...$$ (block) and $...$ (inline) LaTeX segments and
// renders the rest as plain text — for AI-generated content that mixes
// Vietnamese prose with formulas rather than pure KaTeX strings.
export default function MixedMath({ text }) {
  if (!text) return null
  const parts = text.split(/(\$\$[^$]+\$\$|\$[^$]+\$)/g).filter((p) => p !== '')

  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('$$') && part.endsWith('$$')) {
          return <Math key={i} tex={part.slice(2, -2)} block />
        }
        if (part.startsWith('$') && part.endsWith('$')) {
          return <Math key={i} tex={part.slice(1, -1)} />
        }
        return <span key={i}>{part}</span>
      })}
    </>
  )
}
