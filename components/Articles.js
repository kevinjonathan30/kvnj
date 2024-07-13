import { useEffect, useState } from 'react';
import AnimatedAnchor from './include/AnimatedAnchor';
import AnchorButton from './include/AnchorButton';

export default function Articles() {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        async function fetchData() {
            try {
                const response = await fetch("/api/medium/rss", { signal });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const items = data.slice(0, 10); // Adjust the number of items as needed
                setItems(items);
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

    function formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString([], options);
    }

    if (error) {
        return (
            <section>
                <div className="mt-12 pb-10">
                    <h3 className="font-gloriaHallelujah text-3xl py-1 dark:text-white">Latest Articles</h3>
                    <ul className="mb-8">
                        <p className="pt-4 dark:text-white">Failed to fetch data, please try again later.</p>
                    </ul>
                    <div className="flex">
                        <AnchorButton href={"https://kevin-jonathan.medium.com/"}>View on Medium</AnchorButton>
                    </div>
                </div>
            </section>
        );
    } else {
        return (
            <section>
                <div className="mt-12 pb-10">
                    <h3 className="font-gloriaHallelujah text-3xl py-1 dark:text-white">Latest Articles</h3>
                    <ul className="mb-8 pt-4">
                        {items.map((item, index) => (
                            <article key={index}>
                                <p className="text-sm md:text-base font-medium pt-2 dark:text-white">{formatDate(item.pubDate)}</p>
                                <div className="flex">
                                    <AnimatedAnchor href={item.link}>
                                        <h3 className="text-lg md:text-xl font-medium pb-2 text-blue-700 dark:text-blue-400">{item.title}</h3>
                                    </AnimatedAnchor>
                                </div>
                            </article>
                        ))}
                    </ul>
                    <div className="flex">
                        <AnchorButton href={"https://kevin-jonathan.medium.com/"}>View More</AnchorButton>
                    </div>
                </div>
            </section>
        );
    }
}
