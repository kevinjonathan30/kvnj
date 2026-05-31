// Header: Animated header with name, title, intro, and social media links
import { motion } from 'framer-motion';
import AnimatedAnchor from './include/AnimatedAnchor';
import { useLocalization } from '@/hooks/useLocalization';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { slideUpVariants } from '@/lib/animationVariants';

export default function Header() {
    const l = useLocalization();
    const { ref, controls } = useScrollAnimation();

    return (
        <section ref={ref}>
            <motion.div
                className="text-center p-10"
                initial="hidden"
                animate={controls}
                variants={slideUpVariants}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <h2 className="text-5xl py-2 text-blue-500 dark:text-blue-400 font-semibold tracking-wide md:text-6xl">{l.headerName}</h2>
                <h3 className="text-2xl py-2 dark:text-white md:text-3xl">{l.headerTitle}</h3>
                <p className="text-md md:text-lg font-normal py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-lg mx-auto">
                    {l.headerIntro}
                </p>
            </motion.div>
        </section>
    );
}
