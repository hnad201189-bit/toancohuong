// Minimal RFC4180-ish CSV parser: handles quoted fields, escaped quotes ("")
// and commas/newlines inside quotes. No external dependency.
export function parseCsv(text) {
  const rows = []
  let row = []
  let field = ''
  let inQuotes = false

  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"'
          i++
        } else {
          inQuotes = false
        }
      } else {
        field += c
      }
      continue
    }

    if (c === '"') {
      inQuotes = true
    } else if (c === ',') {
      row.push(field)
      field = ''
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++
      row.push(field)
      if (row.some((cell) => cell.trim() !== '')) rows.push(row)
      row = []
      field = ''
    } else {
      field += c
    }
  }
  if (field !== '' || row.length) {
    row.push(field)
    if (row.some((cell) => cell.trim() !== '')) rows.push(row)
  }

  if (!rows.length) return []
  const headers = rows[0].map((h) => h.trim())
  return rows.slice(1).map((r) => {
    const obj = {}
    headers.forEach((h, i) => {
      obj[h] = (r[i] ?? '').trim()
    })
    return obj
  })
}

export async function parseImportFile(file) {
  const text = await file.text()
  if (file.name.toLowerCase().endsWith('.json')) {
    const data = JSON.parse(text)
    const rows = Array.isArray(data) ? data : data.rows
    if (!Array.isArray(rows)) throw new Error('File JSON phải là một mảng, hoặc { "rows": [...] }')
    return rows
  }
  return parseCsv(text)
}
