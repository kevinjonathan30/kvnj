import Parser from 'rss-parser';
import fetch from 'isomorphic-unfetch';

const parser = new Parser();

export default async function handler(req, res) {
  const rssUrl = 'https://kevin-jonathan.medium.com/feed';
  try {
    const response = await fetch(rssUrl);
    const xml = await response.text();
    const feed = await parser.parseString(xml);
    res.status(200).json(feed.items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch RSS feed' });
  }
}