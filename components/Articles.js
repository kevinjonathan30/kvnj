import { useContext, useEffect, useState } from 'react';
import AppContext from '@/context/AppContext';
import localization from '@/public/localization/localization.json';
import AnimatedAnchor from './include/AnimatedAnchor';
import AnchorButton from './include/AnchorButton';

export default function Articles() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const context = useContext(AppContext);
    const l = localization[context.language];

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
            } catch (error) {
                console.error('Failed to fetch data:', error);
            } finally {
                setLoading(false); // Set loading to false regardless of success or failure
            }
        }

        fetchData();
        return () => {
            abortController.abort();
        };
    }, []);

    return (
        <section>
            <div className="mt-12 pb-10">
                <h3 className="font-gloriaHallelujah text-3xl py-1 dark:text-white text-center">{l.articlesTitle}</h3>
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
                                        <h3 className="text-lg md:text-xl font-medium pb-2 text-blue-700 dark:text-blue-400">{item.title}</h3>
                                    </AnimatedAnchor>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
                <div className="flex justify-center">
                    <AnchorButton href={"https://kevin-jonathan.medium.com/"}>{l.articlesViewMore}</AnchorButton>
                </div>
            </div>
        </section>
    );
}

function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString([], options);
}
