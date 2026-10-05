// Accepts a unix-seconds value ("1769516685") or a normal date ("2026-10-05", "2026-10-05 14:30").
// Returns unix seconds, or 0 if empty/invalid.
export function parseTime(value) {
    if (!value) return 0
    if (/^\d+$/.test(String(value))) return Number(value)
    return Math.floor(Date.parse(String(value).replace(" ", "T")) / 1000) || 0
}