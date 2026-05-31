// Articles: Fetches and displays Medium articles with loading state
import { useEffect, useState } from 'react';
import AnimatedAnchor from './include/AnimatedAnchor';
import Button from './include/Button';
import { useLocalization } from '@/hooks/useLocalization';


export default function Articles() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const l = useLocalization();

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        async function fetchAllArticles() {
            try {
                // Fetch Medium articles
                const mediumRes = await fetch('/api/medium/rss', { signal });
                if (!mediumRes.ok) throw new Error('Network response was not ok');
                const mediumData = await mediumRes.json();
                const allArticles = mediumData.map(item => ({
                    source: 'medium',
                    title: item.title,
                    link: item.link,
                    pubDate: item.pubDate,
                })).sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
                setItems(allArticles);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchAllArticles();
        return () => abortController.abort();
    }, []);

    return (
        <section>
            <div className="mt-12 pb-10">
                <h3 className="text-3xl py-1 dark:text-white text-center">{l.articlesTitle}</h3>
                {loading ? (
                    <div className="flex items-center justify-center mb-8">
                        <div className="mr-4">
                            <p className="text-md md:text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">{l.loadingMessage}</p>
                        </div>
                    </div>
                ) : (
                    <ul className="mb-8 pt-4 text-center">
                        {items.map((item, index) => (
                            <li key={index} className="mb-4">
                                <p className="text-sm md:text-base font-medium pt-2 dark:text-white">{formatDate(item.pubDate)}</p>
                                <div className="flex justify-center">
                                    <AnimatedAnchor href={item.link}>
                                        <h3 className="text-lg md:text-xl font-medium pb-2 text-blue-700 dark:text-blue-400">
                                            {item.title}
                                        </h3>
                                    </AnimatedAnchor>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 w-full md:w-auto mt-4">
                    <Button href="https://kevin-writes.medium.com/">{l.articlesViewMore}</Button>
                </div>
            </div>
        </section>
    );
}

function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString([], options);
}
