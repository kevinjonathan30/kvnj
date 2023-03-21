import { useEffect, useState } from 'react';

export default function Articles() {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kevin-jonathan');
                const data = await res.json();
                const items = data.items.slice(0, 3);
                setItems(items);
            } catch {
                setError(true);
            }
        }

        fetchData();
    }, []);

    function formatDate(string){
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([], options);
    }

    if (error) {
        return (
            <section>
                <div className="mt-12">
                    <h3 className="text-3xl py-1 dark:text-white">Latest Articles</h3>
                    <ul className="mb-8">
                        <p className="pt-4 dark:text-white">Failed to fetch data, please try again later.</p>
                    </ul>
                    <a
                        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-md"
                        href={"https://medium.com/feed/@kevin-jonathan"}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                    >
                        Read on Medium
                    </a>
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
                            <a href={item.link} target={"_blank"}>
                                <h3 className="text-lg font-medium pb-2 text-blue-500 dark:text-blue-400">{item.title}</h3>
                            </a>
                        </div>
                    ))}
                </ul>
                <a
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-md"
                    href={"https://medium.com/feed/@kevin-jonathan"}
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                >
                    Read More on Medium
                </a>
            </div>
        </section>
    );
}