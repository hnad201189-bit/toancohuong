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
        // Plain-text segments may contain a literal "<br>" (used by mock-exam
        // content to break a multi-part prompt/solution into lines) — split
        // and render as real line breaks instead of showing the raw tag text.
        const lines = part.split(/<br\s*\/?>/i)
        return (
          <span key={i}>
            {lines.map((line, li) => (
              <span key={li}>
                {li > 0 && <br />}
                {line}
              </span>
            ))}
          </span>
        )
      })}
    </>
  )
}
