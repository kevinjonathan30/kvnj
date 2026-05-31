// Header: Animated header with name, title, intro, and social media links
import { useContext } from 'react';
import AppContext from '@/context/AppContext';
import { motion } from 'framer-motion';
import { FaBehanceSquare, FaEnvelopeSquare, FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import AnimatedAnchor from './include/AnimatedAnchor';
import { useLocalization } from '@/hooks/useLocalization';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { slideUpVariants } from '@/lib/animationVariants';

export default function Header() {
    const context = useContext(AppContext);
    const l = useLocalization();
    const { ref, controls } = useScrollAnimation();

    const socialMediaLinks = [
        { icon: <FaBehanceSquare />, link: 'https://be.net/kevinjonathan3010' },
        { icon: <FaGithubSquare />, link: 'https://github.com/KevinJonathan30' },
        { icon: <FaEnvelopeSquare />, link: 'mailto:kevinjonathan@ymail.ne.jp' },
        { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/kevinjonathan3010' },
        { icon: <FaTwitterSquare />, link: 'https://x.com/kevinjo30_' },
    ];

    return (
        <section ref={ref}>
            <motion.div
                className="text-center p-10"
                initial="hidden"
                animate={controls}
                variants={slideUpVariants}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <h2 className="text-5xl py-2 text-blue-700 dark:text-blue-400 font-semibold tracking-wide md:text-6xl">{l.headerName}</h2>
                <h3 className="text-2xl py-2 dark:text-white md:text-3xl">{l.headerTitle}</h3>
                <p className="text-md md:text-xl font-normal py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-lg mx-auto">
                    {l.headerIntro}
                </p>
            </motion.div>
            <motion.div
                className="text-4xl flex justify-center gap-4 py-3 text-gray-600 dark:text-gray-400"
                initial="hidden"
                animate={controls}
                variants={slideUpVariants}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                {socialMediaLinks.map(({ icon, link }, index) => (
                    <AnimatedAnchor key={index} href={link}>
                        {icon}
                    </AnimatedAnchor>
                ))}
            </motion.div>
        </section>
    );
}
