import AnimatedAnchor from "./AnimatedAnchor";

export default function Button({ children, onClick, className, useStyle=true }) {
    if (useStyle) {
        return (
            <AnimatedAnchor className={className}>
                <button
                    onClick={onClick}
                    className="bg-blue-100 dark:bg-gray-900 text-gray-900 dark:text-blue-100 font-semibold px-4 py-2 border-2 border-gray-900 dark:border-blue-100"
                >
                    {children}
                </button>
            </AnimatedAnchor>
        );
    } else {
        return (
            <AnimatedAnchor className={className}>
                <button
                    onClick={onClick}
                    className="text-gray-900 dark:text-blue-100 font-semibold px-4 py-2"
                >
                    {children}
                </button>
            </AnimatedAnchor>
        );
    }
}