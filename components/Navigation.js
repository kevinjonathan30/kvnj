import { useState, useContext } from 'react';
import { BsFillMoonStarsFill, BsGridFill, BsChevronBarRight } from 'react-icons/bs';
import Button from './include/Button';
import AppContext from '@/context/AppContext';
import AnimatedAnchor from './include/AnimatedAnchor';

export default function Navigation() {
    const context = useContext(AppContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const openMenu = () => {
        setMenuOpen(true);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <nav className="py-10 mb-12 flex justify-between dark:text-white">
                <AnimatedAnchor href={"./"} openInNewTab={false}>
                    <h1 className="text-xl font-burtons font-bold">KVNJ</h1>
                </AnimatedAnchor>
            </nav>

            <div className='fixed inset-y-5 right-0 md:right-5 z-50'>
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

            </div>

            <div className="fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out" style={{ opacity: menuOpen ? '1' : '0', pointerEvents: menuOpen ? 'auto' : 'none' }} onClick={closeMenu}>
                <div
                    className={`fixed inset-y-0 right-0 z-50 w-full md:w-1/4 bg-blue-200 dark:bg-gray-800 text-white transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <Button onClick={closeMenu} useStyle={false}>
                        <BsChevronBarRight className="p-2 cursor-pointer bg-blue-700 dark:bg-blue-400 text-blue-50 dark:text-gray-900 absolute top-5 right-5 text-5xl" />
                    </Button>
                    <ul className="text-center mt-8">
                        <li className="mb-12">
                            <AnimatedAnchor href={"./"} openInNewTab={false}>
                                <h1 className="text-4xl font-burtons font-bold text-gray-900 dark:text-blue-50">KVNJ</h1>
                            </AnimatedAnchor>
                        </li>
                        <li className="mb-8">
                            <AnimatedAnchor className="font-gloriaHallelujah text-2xl text-gray-900 dark:text-blue-100" href={"/portfolio/"} openInNewTab={false}>Portfolio</AnimatedAnchor>
                        </li>
                        <li className="mb-8">
                            <AnimatedAnchor className="font-gloriaHallelujah text-2xl text-gray-900 dark:text-blue-100" href={"/articles/"} openInNewTab={false}>Articles</AnimatedAnchor>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
