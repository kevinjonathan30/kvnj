import AnimatedAnchor from './AnimatedAnchor';

export default function Button({ children, href, openInNewTab=true }) {
    return (
        <AnimatedAnchor 
            className="bg-blue-400 dark:bg-blue-600 text-black dark:text-white font-semibold px-4 py-2 border-2 border-black dark:border-white"
            href={href}
            openInNewTab={openInNewTab}
        >
            {children}
        </AnimatedAnchor>
    );
}