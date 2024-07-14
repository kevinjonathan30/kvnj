import { useState, useEffect, useContext } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { BsFillMoonStarsFill, BsGridFill } from 'react-icons/bs';
import { IoClose } from "react-icons/io5";
import Button from './include/Button';
import AppContext from '@/context/AppContext';
import AnimatedAnchor from './include/AnimatedAnchor';
import { useInView } from 'react-intersection-observer';

const slideLeftVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

export default function Navigation() {
    const context = useContext(AppContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const controls = useAnimation(); // Animation controls for main navigation elements
    const menuControls = useAnimation(); // Animation controls for menu items
    const { ref, inView } = useInView({ threshold: 0.1 }); // Hook for detecting element visibility

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    const openMenu = () => {
        setMenuOpen(true);
        // Start animation for menu items when menu opens
        menuControls.start('visible');
    };

    const closeMenu = () => {
        setMenuOpen(false);
        // Start animation for menu items when menu closes
        menuControls.start('hidden');
    };

    return (
        <>
            <nav className="py-10 mb-12 flex justify-between dark:text-white">
                <AnimatedAnchor href={"./"} openInNewTab={false}>
                    <h1 className="text-xl font-burtons font-bold">KVNJ</h1>
                </AnimatedAnchor>
            </nav>

            <motion.div
                ref={ref}
                className='fixed inset-y-5 right-0 md:right-5 z-50'
                initial="hidden"
                animate={controls}
                variants={slideLeftVariants}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <ul>
                    <li>
                        <Button onClick={openMenu} useStyle={false}>
                            <BsGridFill className="p-2 cursor-pointer bg-blue-700 dark:bg-blue-400 text-blue-50 dark:text-gray-900 text-5xl" />
                        </Button>
                    </li>
                    <li>
                        <Button onClick={() => {
                            context.setDarkMode(!context.darkMode)
                        }} useStyle={false}>
                            <BsFillMoonStarsFill className="p-2 cursor-pointer bg-blue-700 dark:bg-blue-400 text-blue-50 dark:text-gray-900 text-5xl" />
                        </Button>
                    </li>
                </ul>
            </motion.div>

            <div className="fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out" style={{ opacity: menuOpen ? '1' : '0', pointerEvents: menuOpen ? 'auto' : 'none' }} onClick={closeMenu}>
                <motion.div
                    className={`fixed inset-y-0 right-0 z-50 w-full md:w-1/4 bg-blue-200 dark:bg-gray-800 text-white transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    initial="hidden"
                    animate={menuControls}
                    variants={slideLeftVariants}
                    transition={{ duration: 0.5 }}
                >
                    <Button onClick={closeMenu} useStyle={false}>
                        <IoClose className="p-2 cursor-pointer bg-blue-700 dark:bg-blue-400 text-blue-50 dark:text-gray-900 absolute top-5 right-5 text-5xl" />
                    </Button>
                    <ul className="text-center mt-8">
                        <li className="mb-12">
                            <AnimatedAnchor href={"./"} openInNewTab={false}>
                                <h1 className="text-4xl font-burtons font-bold text-gray-900 dark:text-blue-50">KVNJ</h1>
                            </AnimatedAnchor>
                        </li>
                        <motion.li
                            className="mb-8"
                            initial="hidden"
                            animate={menuControls}
                            variants={slideLeftVariants}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <AnimatedAnchor className="font-gloriaHallelujah text-2xl text-gray-900 dark:text-blue-100" href={"/portfolio/"} openInNewTab={false}>Portfolio</AnimatedAnchor>
                        </motion.li>
                        <motion.li
                            className="mb-8"
                            initial="hidden"
                            animate={menuControls}
                            variants={slideLeftVariants}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <AnimatedAnchor className="font-gloriaHallelujah text-2xl text-gray-900 dark:text-blue-100" href={"/articles/"} openInNewTab={false}>Articles</AnimatedAnchor>
                        </motion.li>
                    </ul>
                </motion.div>
            </div>
        </>
    );
}
