import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaBehanceSquare, FaEnvelopeSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import AnimatedAnchor from './include/AnimatedAnchor';
import { useInView } from 'react-intersection-observer';

const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

export default function Header() {
    const socialMediaLinks = [
        {
            icon: <FaBehanceSquare />,
            link: "https://be.net/kevinjonathan3010",
        },
        {
            icon: <FaGithubSquare />,
            link: "https://github.com/KevinJonathan30",
        },
        {
            icon: <FaEnvelopeSquare />,
            link: "mailto:kevinjonathan@ymail.ne.jp",
        },
        {
            icon: <FaLinkedin />,
            link: "https://www.linkedin.com/in/kevinjonathan3010",
        },
    ];

    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    return (
        <section ref={ref}>
            <motion.div
                className="text-center p-10"
                initial="hidden"
                animate={controls}
                variants={slideUpVariants}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <h2 className="font-gloriaHallelujah text-5xl py-2 text-blue-700 dark:text-blue-400 font-semibold tracking-wide md:text-6xl">Kevin Jonathan</h2>
                <h3 className="font-gloriaHallelujah text-2xl py-2 dark:text-white md:text-3xl">Software Engineer</h3>
                <p className="text-md md:text-xl font-normal py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-lg mx-auto">
                    I am Kevin Jonathan, currently dedicated to my academic endeavors at Waseda University as both a student and a research assistant. I hold a degree from Petra Christian University and have successfully completed the Apple Developer Academy program. Additionally, I contribute as an external code reviewer for Dicoding Indonesia.
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
