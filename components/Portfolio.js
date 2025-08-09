// Portfolio: Fetches and displays Behance portfolio items with loading and animation
import { useEffect, useState, useContext } from 'react';
import AnchorImage from './include/AnchorImage';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AppContext from '@/context/AppContext';
import localization from '@/public/localization/localization.json';

const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

export default function Portfolio() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [allLoaded, setAllLoaded] = useState(false);
    const { ref, inView } = useInView({ threshold: 0.1 });
    const controls = useAnimation();
    const context = useContext(AppContext);
    const l = localization[context.language];

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        async function fetchData() {
            try {
                const response = await fetch('/api/behance/rss', { signal });
                if (!response.ok) throw new Error('Network response was not ok');
                const rssItems = await response.json();
                const imgRegex = /<img[^>]+src=['"]([^'"]+)['"]/;
                const processedItems = rssItems
                    .map(item => {
                        const match = imgRegex.exec(item.content);
                        if (match) {
                            return {
                                href: item.link,
                                src: match[1].replace('/404/', '/original/'),
                                alt: item.title,
                            };
                        }
                        return null;
                    })
                    .filter(Boolean);
                setItems(processedItems);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
        return () => abortController.abort();
    }, []);

    useEffect(() => {
        const imagePromises = items.map(item => {
            return new Promise((resolve, reject) => {
                const img = new window.Image();
                img.onload = () => resolve();
                img.onerror = () => reject();
                img.src = item.src;
            });
        });
        Promise.all(imagePromises)
            .then(() => setAllLoaded(true))
            .catch(() => setAllLoaded(false));
    }, [items]);

    useEffect(() => {
        controls.start(allLoaded && inView ? 'visible' : 'hidden');
    }, [controls, allLoaded, inView]);

    if (loading) {
        return (
            <section>
                <div className="mt-20">
                    <h3 className="font-gloriaHallelujah text-3xl py-1 dark:text-white">{l.portfolioTitle}</h3>
                </div>
                <div className="flex justify-center items-center h-64">
                    <p className="text-md md:text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">{l.loadingMessage}</p>
                </div>
            </section>
        );
    }

    return (
        <section ref={ref}>
            <motion.div
                className="mt-20"
                initial="hidden"
                animate={controls}
                variants={slideUpVariants}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <h3 className="font-gloriaHallelujah text-3xl py-1 dark:text-white">{l.portfolioTitle}</h3>
                <p className="text-md md:text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">
                    {l.portfolioIntro1}
                </p>
                <p className="text-md md:text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">
                    {l.portfolioIntro2}
                </p>
            </motion.div>
            <motion.div
                className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap"
                initial="hidden"
                animate={controls}
                variants={slideUpVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {items.map((item, index) => (
                    <div className="basis-1/3 flex-1" key={index}>
                        <AnchorImage href={item.href} src={item.src} alt={item.alt} />
                    </div>
                ))}
                {items.length % 2 !== 0 && <div className="basis-1/3 flex-1"></div>}
            </motion.div>
        </section>
    );
}
