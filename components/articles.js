import { useEffect, useState } from 'react';
import MotionWrapper from './include/MotionWrapper';

const CACHE_KEY = 'mediumRss';

export default function Articles() {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                let cachedData = localStorage.getItem(CACHE_KEY);

                if (cachedData) {
                    cachedData = JSON.parse(cachedData);
                    setItems(cachedData.items.slice(0, 3));
                }

                const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://kevin-jonathan.medium.com/feed');
                const data = await res.json();
                const items = data.items.slice(0, 3);
                setItems(items);
                localStorage.setItem(CACHE_KEY, JSON.stringify(data));
            } catch {
                setError(true);
            }
        }

        fetchData();
    }, []);

    function formatDate(date) {
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString([], options);
    }

    if (error) {
        return (
            <section>
                <div className="mt-12">
                    <h3 className="text-3xl py-1 dark:text-white">Latest Articles</h3>
                    <ul className="mb-8">
                        <p className="pt-4 dark:text-white">Failed to fetch data, please try again later.</p>
                    </ul>
                    <div className="flex">
                        <MotionWrapper>
                            <a
                                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-md"
                                href={"https://kevin-jonathan.medium.com/"}
                                target={"_blank"}
                                rel={"noopener noreferrer"}
                            >
                                Read on Medium
                            </a>
                        </MotionWrapper>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section>
            <div className="mt-12">
                <h3 className="text-3xl py-1 dark:text-white">Latest Articles</h3>
                <ul className="mb-8 pt-4">
                    {items.map((item, index) => (
                        <div key={index}>
                            <p className="text-sm font-medium pt-2 dark:text-white">{formatDate(item.pubDate)}</p>
                            <div className="flex">
                                <MotionWrapper>
                                    <a href={item.link} target={"_blank"}>
                                        <h3 className="text-lg font-medium pb-2 text-blue-500 dark:text-blue-400">{item.title}</h3>
                                    </a>
                                </MotionWrapper>
                            </div>
                        </div>
                    ))}
                </ul>
                <div className="flex">
                    <MotionWrapper>
                        <a
                            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-md"
                            href={"https://kevin-jonathan.medium.com/"}
                            target={"_blank"}
                            rel={"noopener noreferrer"}
                        >
                            Read More on Medium
                        </a>
                    </MotionWrapper>
                </div>
            </div>
        </section>
    );
}