import { useEffect, useState } from 'react';
import AnimatedAnchor from './include/AnimatedAnchor';
import Button from './include/Button';
import Parser from 'rss-parser';
import fetch from 'isomorphic-unfetch';

export default function Articles() {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        const CACHE_KEY = 'mediumRss';

        async function fetchData() {
            try {
                let cachedData = localStorage.getItem(CACHE_KEY);
                if (cachedData) {
                    cachedData = JSON.parse(cachedData);
                    setItems(cachedData.items.slice(0, 3));
                }

                const response = await fetch("https://kevin-jonathan.vercel.app/api/rss", signal);
                const xml = await response.text();
                const feed = await Parser.parseString(xml);
                const items = feed.items.slice(0, 3);
                setItems(items);
                localStorage.setItem(CACHE_KEY, JSON.stringify(data));
                setError(false);
            } catch {
                console.log(error)
                setError(true);
            }
        }

        fetchData();
        return () => {
            abortController.abort();
        }
    }, []);

    function formatDate(date) {
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
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
                        <Button href={"https://kevin-jonathan.medium.com/"}>View on Medium</Button>
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
                        <Button href={"https://kevin-jonathan.medium.com/"}>View More</Button>
                    </div>
                </div>
            </section>
        );
    }
}