import { useEffect, useState } from 'react';
import AnimatedAnchor from './include/AnimatedAnchor';
import AnchorButton from './include/AnchorButton';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

export default function Articles() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { ref, inView } = useInView({ triggerOnce: true });
    const controls = useAnimation();

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

    useEffect(() => {
        // Animate when in view
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    return (
        <section ref={ref}>
            <div className="mt-12 pb-10">
                <h3 className="font-gloriaHallelujah text-3xl py-1 dark:text-white">Latest Articles</h3>
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <p className="text-md md:text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">Loading...</p>
                    </div>
                ) : (
                    <motion.ul
                        className="mb-8 pt-4"
                        initial="hidden"
                        animate={controls}
                        variants={slideUpVariants}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {items.map((item, index) => (
                            <motion.article key={index} className="mb-4">
                                <p className="text-sm md:text-base font-medium pt-2 dark:text-white">{formatDate(item.pubDate)}</p>
                                <div className="flex">
                                    <AnimatedAnchor href={item.link}>
                                        <h3 className="text-lg md:text-xl font-medium pb-2 text-blue-700 dark:text-blue-400">{item.title}</h3>
                                    </AnimatedAnchor>
                                </div>
                            </motion.article>
                        ))}
                    </motion.ul>
                )}
                <div className="flex">
                    <AnchorButton href={"https://kevin-jonathan.medium.com/"}>View More</AnchorButton>
                </div>
            </div>
        </section>
    );
}

function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString([], options);
}
