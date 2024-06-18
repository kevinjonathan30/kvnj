import Parser from 'rss-parser';
import fetch from 'isomorphic-unfetch';

const parser = new Parser();

export default async function handler(req, res) {
  const rssUrl = 'https://www.behance.net/feeds/user?username=kevinjonathan3010';
  try {
    const response = await fetch(rssUrl);
    const xml = await response.text();
    const feed = await parser.parseString(xml);
    res.status(200).json(feed.items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch RSS feed' });
  }
}

// Behance: https://www.behance.net/v2/users/kevinjonathan3010/projects?api_key=ZLBxK9rEfHwJf9K0rmseNr2fS2gS2HJW
// Behance RSS (Recommended): https://www.behance.net/feeds/user?username=kevinjonathan3010

// Sample RSS items with description, title, and link
// const rssItems = [
//   {
//       title: "Item 1 Title",
//       link: "https://example.com/item1",
//       description: "<![CDATA[<img src='https://mir-s3-cdn-cf.behance.net/projects/404/2eb5f5189504689.Y3JvcCwxMzQyLDEwNTAsMjksMA.png' style='float:left; margin-right:15px;' /><br /> Independent tour guide application \"Touristicia\" that allows users to travel easier, guided by AR (Augmented Reality) technology.]]>"
//   },
//   {
//       title: "Item 2 Title",
//       link: "https://example.com/item2",
//       description: "<![CDATA[<img src='https://mir-s3-cdn-cf.behance.net/projects/404/3a8e24126782917.Y3JvcCwxMzQyLDEwNTAsMjksMA.png' style='float:left; margin-right:15px;' /><br /> Another description with an image.]]>"
//   }
// ];

// // Regular expression to extract the image src attribute value
// const imgRegex = /<img[^>]+src=['"]([^'"]+)['"]/;

// // Array to hold processed items
// let processedItems = [];

// // Process each RSS item
// rssItems.forEach(item => {
//   // Initialize an object for the processed item
//   let processedItem = {
//       title: item.title,
//       link: item.link
//   };

//   // Extract image URL from description
//   const match = imgRegex.exec(item.description);
//   if (match) {
//       let imageUrl = match[1].replace('/404/', '/original/');
//       processedItem.imageUrl = imageUrl;
//   }

//   // Push processed item into the array
//   processedItems.push(processedItem);
// });

// // Output the processed items as JSON
// console.log(JSON.stringify(processedItems, null, 2));
