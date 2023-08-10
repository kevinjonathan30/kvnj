import AnimatedAnchor from './AnimatedAnchor';

export default function Button({ children, href }) {
    return (
        <AnimatedAnchor className="bg-blue-600 dark:bg-blue-400 text-white dark:text-black font-semibold px-4 py-2 border-2 border-black"
            href={href}>
            {children}
        </AnimatedAnchor>
    );
}