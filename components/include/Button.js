import AnimatedAnchor from './AnimatedAnchor';

// Button: A styled button wrapped with AnimatedAnchor
export default function Button({ children, onClick, className, useStyle = true }) {
    const styledClass = useStyle
        ? 'bg-blue-50 dark:bg-gray-900 text-gray-900 dark:text-blue-100 font-semibold px-4 py-2 border-2 border-gray-900 dark:border-blue-100'
        : 'text-gray-900 dark:text-blue-100 font-semibold px-4 py-2 rounded-md';

    return (
        <AnimatedAnchor className={className}>
            <button onClick={onClick} className={styledClass}>
                {children}
            </button>
        </AnimatedAnchor>
    );
}