import { useState, useEffect, useContext } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { CgDarkMode } from "react-icons/cg";
import { RiMenu4Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";
import { GiJapan } from "react-icons/gi";
import Button from './include/Button';
import AppContext from '@/context/AppContext';
import AnimatedAnchor from './include/AnimatedAnchor';
import { useInView } from 'react-intersection-observer';
import localization from '@/public/localization/localization.json';

const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

export default function Navigation() {
    const context = useContext(AppContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const controls = useAnimation(); // Animation controls for main navigation elements
    const menuControls = useAnimation(); // Animation controls for menu items
    const { ref, inView } = useInView({ threshold: 0.1 }); // Hook for detecting element visibility
    const l = localization[context.language];

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
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={slideUpVariants}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <nav className="py-10 mb-12 flex justify-between dark:text-white">
                    <AnimatedAnchor href={"./"} openInNewTab={false}>
                        <h1 className="text-xl font-burtons font-bold">KVNJ</h1>
                    </AnimatedAnchor>
                </nav>
            </motion.div>

            <motion.div
                ref={ref}
                className='fixed inset-y-5 right-0 md:right-5 z-50'
                initial="hidden"
                animate={controls}
                variants={slideUpVariants}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <ul>
                    <li>
                        <Button onClick={menuOpen ? closeMenu : openMenu} useStyle={false}>
                            {menuOpen ? <IoClose className="p-2 cursor-pointer bg-blue-700 dark:bg-blue-400 text-blue-50 dark:text-gray-900 text-5xl" /> : <RiMenu4Fill className="p-2 cursor-pointer bg-blue-700 dark:bg-blue-400 text-blue-50 dark:text-gray-900 text-5xl" />}
                        </Button>
                    </li>
                    <li>
                        <Button onClick={() => {
                            context.setDarkMode(!context.darkMode)
                        }} useStyle={false}>
                            <CgDarkMode className="p-2 cursor-pointer bg-blue-700 dark:bg-blue-400 text-blue-50 dark:text-gray-900 text-5xl" />
                        </Button>
                    </li>
                    <li>
                        <Button 
                            onClick={() => context.setLanguage(context.language === 'en' ? 'ja' : 'en')} 
                            useStyle={false}
                        >
                            {context.language === 'en' ? 
                                <MdLanguage className="p-2 cursor-pointer bg-blue-700 dark:bg-blue-400 text-blue-50 dark:text-gray-900 text-5xl" />
                             : 
                                <GiJapan className="p-2 cursor-pointer bg-blue-700 dark:bg-blue-400 text-blue-50 dark:text-gray-900 text-5xl" />
                            }
                        </Button>
                    </li>
                </ul>
            </motion.div>

            <div className="fixed inset-0 z-10 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out" style={{ opacity: menuOpen ? '1' : '0', pointerEvents: menuOpen ? 'auto' : 'none' }} onClick={closeMenu}>
                <motion.div
                    className={`fixed inset-y-0 right-0 z-50 w-full md:w-1/4 bg-blue-100 dark:bg-gray-900 text-white transform transition-colors duration-500 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    initial="hidden"
                    animate={menuControls}
                    variants={slideUpVariants}
                    transition={{ duration: 0.5 }}
                >
                    <ul className="text-center mt-12">
                        <li className="mb-12">
                            <AnimatedAnchor href={"./"} openInNewTab={false}>
                                <h1 className="text-4xl font-burtons font-bold text-gray-900 dark:text-blue-50">KVNJ</h1>
                            </AnimatedAnchor>
                        </li>
                        <motion.li
                            className="mb-8"
                            initial="hidden"
                            animate={menuControls}
                            variants={slideUpVariants}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <AnimatedAnchor className="font-gloriaHallelujah text-2xl text-gray-900 dark:text-blue-100" href={"/portfolio/"} openInNewTab={false}>{l.menuPortfolio}</AnimatedAnchor>
                        </motion.li>
                        <motion.li
                            className="mb-8"
                            initial="hidden"
                            animate={menuControls}
                            variants={slideUpVariants}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <AnimatedAnchor className="font-gloriaHallelujah text-2xl text-gray-900 dark:text-blue-100" href={"/articles/"} openInNewTab={false}>{l.menuArticles}</AnimatedAnchor>
                        </motion.li>
                    </ul>
                </motion.div>
            </div>
        </>
    );
}
