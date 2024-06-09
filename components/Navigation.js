import { useContext } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import Button from './include/Button';
import AppContext from '@/context/AppContext';
import AnimatedAnchor from './include/AnimatedAnchor';

export default function Navigation() {
    const context = useContext(AppContext);

    return (
        <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <AnimatedAnchor href={"./"} openInNewTab={false}>
                <h1 className="text-xl font-burtons font-bold">KVNJ</h1>
            </AnimatedAnchor>

            <ul className="flex items-center">
                <li>
                    <AnimatedAnchor>
                        <BsFillMoonStarsFill onClick={() => {
                            context.setDarkMode(!context.darkMode)
                        }} className="cursor-pointer text-2xl" />
                    </AnimatedAnchor>
                </li>
                <li className={"ml-8"}>
                    <Button href={"/portfolio/"} openInNewTab={false}>Portfolio</Button>
                </li>
            </ul>
        </nav>
    );
}