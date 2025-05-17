import AnimatedAnchor from './AnimatedAnchor';

export default function AnchorButton({ children, href, openInNewTab=true }) {
    return (
        <AnimatedAnchor 
            className="bg-blue-100 dark:bg-gray-900 text-gray-900 dark:text-blue-100 font-semibold px-4 py-2 border-2 border-gray-900 dark:border-blue-100"
            href={href}
            openInNewTab={openInNewTab}
        >
            {children}
        </AnimatedAnchor>
    );
}