import { useEffect, useState } from 'react';
import AnchorImage from './include/AnchorImage';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

                let processedItems = [];
                for (const item of rssItems) {
                    const match = imgRegex.exec(item.content);
                    if (match) {
                        let imageUrl = match[1].replace('/404/', '/original/');
                        let processedItem = {
                            href: item.link,
                            src: imageUrl,
                            alt: item.title
                        };
                        processedItems.push(processedItem);
                    }
                }

                setItems(processedItems);
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

    useEffect(() => {
        const imagePromises = items.map(item => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve();
                img.onerror = () => reject();
                img.src = item.src;
            });
        });

        Promise.all(imagePromises)
            .then(() => {
                setAllLoaded(true);
            })
            .catch(() => {
                setAllLoaded(false);
            });
    }, [items]);

    useEffect(() => {
        if (allLoaded && inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, allLoaded, inView]);

    if (loading) {
        return (
            <section>
                <div className="mt-20">
                    <h3 className="font-gloriaHallelujah text-3xl py-1 dark:text-white">Portfolio List</h3>
                </div>
                <div className="flex justify-center items-center h-64">
                    <p className="text-md md:text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">Loading...</p>
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
                <h3 className="font-gloriaHallelujah text-3xl py-1 dark:text-white">Portfolio List</h3>
                <p className="text-md md:text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">
                    Alongside being a software engineer, I also do UI/UX Design freelance for customers.
                </p>
                <p className="text-md md:text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">
                    Here is the list of projects that I have worked on related to software or UI/UX design.
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
                {items.length % 2 !== 0 && (
                    <div className="basis-1/3 flex-1"></div>
                )}
            </motion.div>
        </section>
    );
}
