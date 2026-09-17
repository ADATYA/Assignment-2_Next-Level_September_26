const BASE_URL = 'https://api.tvmaze.com'

// Strips HTML tags that TVMaze includes in its summary field
export function stripHtml(html) {
  if (!html) return ''
  return html.replace(/<[^>]*>/g, '')
}

// Fetch all shows (used for the default listing view)
export async function fetchAllShows() {
  const res = await fetch(`${BASE_URL}/shows`)
  if (!res.ok) throw new Error('Failed to fetch shows')
  return res.json()
}

// Search shows by title
export async function searchShows(query) {
  const res = await fetch(`${BASE_URL}/search/shows?q=${encodeURIComponent(query)}`)
  if (!res.ok) throw new Error('Failed to search shows')
  const data = await res.json()
  // TVMaze search results are wrapped as { score, show }
  return data.map((item) => item.show)
}

// Fetch a single show's full details, including cast
export async function fetchShowDetails(id) {
  const res = await fetch(`${BASE_URL}/shows/${id}?embed=cast`)
  if (!res.ok) throw new Error('Failed to fetch show details')
  return res.json()
}
