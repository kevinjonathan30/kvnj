import { useEffect, useState } from 'react';
import AnchorImage from './include/AnchorImage';

export default function Portfolio() {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        async function fetchData() {
            try {
                const response = await fetch("/api/behance/rss", { signal });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const rssItems = await response.json();
                const imgRegex = /<img[^>]+src=['"]([^'"]+)['"]/;

                // Array to hold processed items
                let processedItems = [];

                // Process each RSS item
                rssItems.forEach(item => {
                    // Extract image URL from description
                    const match = imgRegex.exec(item.content);
                    if (match) {
                        let imageUrl = match[1].replace('/404/', '/original/');
                        let processedItem = {
                            href: item.link,
                            src: imageUrl,
                            alt: item.title
                        };
                        // Push processed item into the array
                        processedItems.push(processedItem);
                    }
                });

                // Output the processed items as JSON
                setItems(processedItems);
                setError(false);
            } catch (error) {
                console.error('Failed to fetch data:', error);
                setError(true);
            }
        }

        fetchData();
        return () => {
            abortController.abort();
        };
    }, []);

    return (
        <section>
            <div className="mt-20">
                <h3 className="font-gloriaHallelujah text-3xl py-1 dark:text-white">Portfolio List</h3>
                <p className="text-md md:text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">
                    Alongside being a software engineer, I also do UI/UX Design freelance for customers.
                </p>
                <p className="text-md md:text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">
                    Here are the list of projects that I have worked before related to software or UI/UX design.
                </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                {items.map((item, index) => (
                    <div className="basis-1/3 flex-1" key={index}>
                        <AnchorImage href={item.href} src={item.src} alt={item.alt} />
                    </div>
                ))}
                {items.length % 2 !== 0 && (
                    <div className="basis-1/3 flex-1"></div>
                )}
            </div>
        </section>
    );
}