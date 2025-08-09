// pages/api/note/rss.js
export default async function handler(req, res) {
  const apiUrl = 'https://note.com/api/v2/creators/kevinjonathan/contents?kind=note';
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Note.com articles' });
  }
}